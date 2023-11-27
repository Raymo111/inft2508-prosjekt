import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {H1, H3, Item, Section, SectionHeading} from "../components/Components";
import {Pressable, SafeAreaView, ScrollView} from "react-native";
import {Styles} from "../components/Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {endpoint} from "./Home";
import ItemCard from "../components/ItemCard";
import {useFocusEffect} from "@react-navigation/native";

const CartStack = createNativeStackNavigator();

const CartTabScreen = ({navigation}: { navigation: any }) => {
  const images = {
    resultPlaceholder: require('../assets/item-placeholder.png'),
  };

  // Initial state
  const [items, setItems] = useState<Item[]>([]);
  const [Cart, setCart] = useState<Item[]>([]);

  useEffect(() => {
    // Get items
    fetch(endpoint + 'data.json').then(response => {
      response.json().then(res => {
        setItems(res.items);
      });
    });
  }, []);

  useFocusEffect(() => {
    // Get Cart
    AsyncStorage.getItem('cart').then(value => {
      if (value !== null) {
        let bookmarkIds = value.split(',').map((id: string) => id.trim());
        setCart(items.filter((item: Item) => bookmarkIds.includes(String(item.id))));
      } else {
        setCart([]);
      }
    });
  });

  const showItemHandler = (
    id: number,
  ) => {
    navigation.navigate('Item', {id});
  };

  return (
    <SafeAreaView style={Styles.screen.container}>
      {/* Scrollable page  */}
      <ScrollView style={Styles.page.container}>
        {/* Cart */}
        <Section>
          <SectionHeading>
            <H1>Cart</H1>
            {Cart.length > 0 ? (
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {Cart.map((item: Item, index: number) => (
                  <Pressable key={index} onPress={() => navigation.navigate('Item', {id: item.id})}>
                    <ItemCard item={item} showItem={showItemHandler}/>
                  </Pressable>
                ))}
              </ScrollView>
            ) : (
              <H3>No Cart</H3>
            )}
          </SectionHeading>
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartTabScreen;
