import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Grid, H1, H2, H3, Item, Section, SectionHeading} from "../components/Components";
import {Pressable, SafeAreaView, ScrollView, ToastAndroid, View} from "react-native";
import {Styles} from "../components/Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {endpoint} from "./Home";
import ItemCard from "../components/ItemCard";
import {useFocusEffect} from "@react-navigation/native";

const CartTabScreen = ({navigation}: { navigation: any }) => {

  // Initial state
  const [items, setItems] = useState<Item[]>([]);
  const [cartString, setCartString] = useState<string>("");
  const [cart, setCart] = useState<Item[]>([]);
  const [reccItems, setReccItems] = useState<Item[]>([]);

  useEffect(() => {
    // Get items
    fetch(endpoint + 'data.json').then(response => {
      response.json().then(res => {
        setItems(res.items);
      });
    });
  }, []);

  useFocusEffect(() => {
    // Get cart
    AsyncStorage.getItem('cart').then(value => {
      if (value !== null && cartString != value) {
        setCartString(value)
      } else if (value === null && cartString != "") {
        setCartString("");
      }
    });
  });

  useEffect(() => {
    if (cartString === "") {
      setCart([]);
      return;
    }
    let bookmarkIds = cartString.split(',').map((id: string) => id.trim());
    setCart(items.filter((item: Item) => bookmarkIds.includes(String(item.id))));
  }, [cartString]);

  useEffect(() => {
    // Get unique categories from cart items
    let cartCategories = [...new Set(cart.map(item => item.category))];
    console.log("Recc. categories: " + cartCategories);

    // Filter items based on category
    setReccItems(items.filter(item => cartCategories.includes(item.category)));
  }, [cart]);

  const showItemHandler = (
    id: number,
  ) => {
    navigation.navigate('Item', {id});
  };

  let shippingTime = '3-5 business days';
  return (
    <SafeAreaView style={Styles.screen.container}>
      {/* Scrollable page  */}
      <ScrollView style={Styles.page.container}>
        {/* Cart */}
        <SectionHeading>
          <H1>Cart</H1>
        </SectionHeading>
        {/* Show list of item titles with individual price and total sum */}
        {cart.length > 0 ? (
          <View>
            <Section>
              <View style={Styles.checklist.containerHead}>
                <H1>Item</H1>
                <H1>Price</H1>
              </View>
              <ScrollView>
                {cart.map((item: Item, index: number) => (
                  <Pressable key={index} onPress={() => navigation.navigate('Item', {id: item.id})}
                             style={Styles.checklist.container2}>
                    <H2>{item.title}</H2>
                    <H2>{item.price}</H2>
                  </Pressable>
                ))}
              </ScrollView>
              <H1>Total: {cart.reduce((total, item) => total + item.price, 0)}</H1>
              <H2>Estimated delivery time: {shippingTime}</H2>
            </Section>
            {/* Recommendations from same category */}
            <Section>
              <SectionHeading>
                <H1>Recommendations</H1>
              </SectionHeading>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {reccItems.map((item: Item, index: number) => (
                  <Pressable key={index} onPress={() => navigation.navigate('Item', {id: item.id})}>
                    <ItemCard item={item} showItem={showItemHandler}/>
                  </Pressable>
                ))}
              </ScrollView>
            </Section>
            {/* Footer */}
            <Grid>
              {/* Reset cart */}
              <Pressable onPress={() => {
                AsyncStorage.removeItem('cart').then(r => {
                  console.log(r);

                  // Toast message
                  ToastAndroid.showWithGravity(
                    'Cart reset',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                  );
                });
                setCart([]);
              }} style={Styles.button.container}>
                <H1>Reset cart</H1>
              </Pressable>
              {/* Checkout */}
              <Pressable onPress={() => {
                AsyncStorage.removeItem('cart').then(r => {
                  console.log(r);

                  // Toast message
                  ToastAndroid.showWithGravity(
                    'Thank you for your purchase!',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                  );
                });
                setCart([]);
              }} style={Styles.button.container}>
                <H1>Confirm order</H1>
              </Pressable>
            </Grid>
          </View>
        ) : (
          <H3>No items in cart</H3>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartTabScreen;
