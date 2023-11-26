import React, {useEffect, useState} from 'react';
import {SafeAreaView, Image, Text, ScrollView, View, Pressable} from 'react-native';
import {Styles} from '../components/Styles';
import {Grid, H2, H3, Item} from '../components/Components';
import {endpoint} from "./Home";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ItemScreen = ({route, navigation}: { route: any, navigation: any }) => {
  const {id} = route.params;
  const [item, setItem] = useState<Item>();

  // Find item
  useEffect(() => {
    fetch(endpoint + 'data.json').then(response => {
      response.json().then(res => {
        setItem(res.items.find((item: Item) => item.id === id));
      });
    });
  }, []);

  // Set title
  useEffect(() => {
    navigation.setOptions({
      title: item?.title ?? 'Item',
    });
  }, [item, navigation]);

  const [bookmarked, setBookmarked] = useState<boolean>(false);

  const bookmark = (item: Item) => {
    setBookmarked(!bookmarked);
  };

  const addToCart = (item: Item) => {
    console.log("Added to cart");
  };

  const popimage = (image: any) => {
    console.log(image);
  }

  return (
    <SafeAreaView style={Styles.screen.container}><ScrollView style={Styles.page.container}>
      {item ? <View>
        <Pressable onPress={() => bookmark(item)} style={Styles.page.pinTopLeft}>
          {bookmarked ? <MaterialIcons name={'favorite'} size={30} color={'red'}/> :
            <MaterialIcons name={'favorite-border'} size={30} color={'red'}/>}
        </Pressable>
        <Pressable onPress={() => addToCart(item)} style={Styles.page.pinTopRight}>
          <MaterialIcons name={'add-shopping-cart'} size={30} color={'lightblue'}/>
        </Pressable>
        <View style={Styles.page.center}>
          <Text>{item.description}</Text>
          <H2>Price: {item.price}</H2>
          <H2>Location: {item.location}</H2>
          <H2>Contact info: {item.contact}</H2>
          <H3>Category: {item.category}</H3>
        </View>
        {item.images ? <Grid>
          {item.images.map((image, index) => (
            <Pressable onPress={() => popimage(image)}>
              <Image source={{uri: endpoint + 'img/' + item.id + '/' + (index + 1) + '.jpg'}} style={Styles.card.image}
                     width={200}/>
            </Pressable>
          ))}
        </Grid> : <H3>No images - Contact seller</H3>}
      </View> : <H3>Loading...</H3>}
    </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
