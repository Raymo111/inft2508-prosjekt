import React, {useEffect, useState} from 'react';
import {SafeAreaView, Image, Text, ScrollView, View, Pressable} from 'react-native';
import {Styles} from '../components/Styles';
import {Grid, H2, H3, Item} from '../components/Components';
import {endpoint} from "./Home";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ImageView from "react-native-image-viewing";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ItemScreen = ({route, navigation}: { route: any, navigation: any }) => {
  const {id} = route.params;
  const [item, setItem] = useState<Item>();
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [inCart, setInCart] = useState<boolean>(false);
  const [previewVisible, setIsPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState(0);

  useEffect(() => {
    // Find item
    fetch(endpoint + 'data.json').then(response => {
      response.json().then(res => {
        setItem(res.items.find((item: Item) => item.id === id));
      });
    });

    try {
      // Check if bookmarked
      AsyncStorage.getItem('bookmarks').then(value => {
        if (value !== null) {
          setBookmarked(value.split(',').map((id: string) => id.trim()).includes(String(id)));
        }
      });

      // Check if in cart
      AsyncStorage.getItem('cart').then(value => {
        if (value !== null) {
          setInCart(value.split(',').map((id: string) => id.trim()).includes(String(id)));
        }
      });
    } catch (e) {
      console.log('Error');
    }
  }, []);

  // Set title
  useEffect(() => {
    navigation.setOptions({
      title: item?.title ?? 'Item',
    });
  }, [item, navigation]);

  const bookmark = (item: Item) => {
    if (bookmarked) {
      // Remove from bookmarks
      AsyncStorage.getItem('bookmarks').then(value => {
        if (value !== null) {
          let bookmarks = value.split(',').map((id: string) => id.trim());
          bookmarks.splice(bookmarks.indexOf(String(item.id)));
          AsyncStorage.setItem('bookmarks', bookmarks.join(',')).then(r => {
            console.log(r);
            console.log(bookmarks)
          });
        }
      });
    } else {
      // Add to bookmarks
      AsyncStorage.getItem('bookmarks').then(value => {
        if (value !== null) {
          let bookmarks = value.split(',').map((id: string) => id.trim());
          bookmarks.push(String(item.id));
          AsyncStorage.setItem('bookmarks', bookmarks.join(',')).then(r => {
            console.log(r);
            console.log(bookmarks)
          });
        } else {
          AsyncStorage.setItem('bookmarks', String(item.id)).then(r => {
            console.log(r);
          });
        }
      });
    }
    setBookmarked(!bookmarked);
  };

  const addToCart = (item: Item) => {
    if (inCart) {
      // Remove from cart
      AsyncStorage.getItem('cart').then(value => {
        if (value !== null) {
          let cart = value.split(',').map((id: string) => id.trim());
          cart.splice(cart.indexOf(String(item.id)), 1);
          AsyncStorage.setItem('cart', cart.join(',')).then(r => {
            console.log(r);
          });
        }
      });
    } else {
      // Add to cart
      AsyncStorage.getItem('cart').then(value => {
        if (value !== null) {
          let cart = value.split(',').map((id: string) => id.trim());
          cart.push(String(item.id));
          AsyncStorage.setItem('cart', cart.join(',')).then(r => {
            console.log(r);
          });
        } else {
          AsyncStorage.setItem('cart', String(item.id)).then(r => {
            console.log(r);
          });
        }
      });
    }
    setInCart(!inCart);
  };

  const popimage = (image: number) => {
    setPreviewImage(image);
    setIsPreviewVisible(true);
  }

  return (
    <SafeAreaView style={Styles.screen.container}><ScrollView style={Styles.page.container}>
      {item ? <View>
        <Pressable onPress={() => bookmark(item)} style={Styles.page.pinTopLeft}>
          {bookmarked ? <MaterialIcons name={'favorite'} size={30} color={'red'}/> :
            <MaterialIcons name={'favorite-border'} size={30} color={'red'}/>}
        </Pressable>
        <Pressable onPress={() => addToCart(item)} style={Styles.page.pinTopRight}>
          {inCart ? <MaterialIcons name={'remove-shopping-cart'} size={30} color={'lightblue'}/> :
            <MaterialIcons name={'add-shopping-cart'} size={30} color={'lightblue'}/>}
        </Pressable>
        {item.images &&
			<ImageView
				images={item.images.map((_, index) => ({uri: endpoint + 'img/' + item.id + '/' + (index + 1) + '.jpg'}))}
				imageIndex={previewImage}
				visible={previewVisible}
				onRequestClose={() => setIsPreviewVisible(false)}
			/>}
        <View style={Styles.page.center}>
          <Text>{item.description}</Text>
          <H2>Price: {item.price}</H2>
          <H2>Location: {item.location}</H2>
          <H2>Contact info: {item.contact}</H2>
          <H3>Category: {item.category}</H3>
        </View>
        {item.images ? <Grid>
          {item.images.map((_, index) => (
            <Pressable key={index} onPress={() => popimage(index)}>
              <Image source={{uri: endpoint + 'img/' + item.id + '/' + (index + 1) + '.jpg'}}
                     style={Styles.grid.image} width={200} height={200}/>
            </Pressable>
          ))}
        </Grid> : <H3>No images - Contact seller</H3>}
      </View> : <H3>Loading...</H3>}
    </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
