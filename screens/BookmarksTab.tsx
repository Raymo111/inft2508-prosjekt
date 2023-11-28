import React, {useEffect, useState} from 'react';
import {H1, H3, Item, Section, SectionHeading, Title} from "../components/Components";
import {Pressable, SafeAreaView, ScrollView} from "react-native";
import {Styles} from "../components/Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {endpoint} from "./Home";
import ItemCard from "../components/ItemCard";
import {useFocusEffect} from "@react-navigation/native";
import I18n from "../localization/I18n";

const BookmarksTabScreen = ({navigation}: { navigation: any }) => {
  // Initial state
  const [items, setItems] = useState<Item[]>([]);
  const [bookmarks, setBookmarks] = useState<Item[]>([]);

  useEffect(() => {
    // Get items
    fetch(endpoint + 'data.json').then(response => {
      response.json().then(res => {
        setItems(res.items);
      });
    });
  }, []);

  useFocusEffect(() => {
    // Get bookmarks
    AsyncStorage.getItem('bookmarks').then(value => {
      if (value !== null) {
        let bookmarkIds = value.split(',').map((id: string) => id.trim());
        setBookmarks(items.filter((item: Item) => bookmarkIds.includes(String(item.id))));
      } else {
        setBookmarks([]);
      }
    });
  });

  const showItemHandler = (
    id: number,
  ) => {
    navigation.navigate('Item', {id});
  };

  return (
    <SafeAreaView style={Styles.s.screen.container}>
      {/* Scrollable page  */}
      <ScrollView style={Styles.s.page.container}>
        {/* Bookmarks */}
        <SectionHeading>
          <Title>{I18n.t('Bookmarks')}</Title>
        </SectionHeading>
        <Section>
          {bookmarks.length > 0 ? (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {bookmarks.map((item: Item, index: number) => (
                <Pressable key={index} onPress={() => navigation.navigate('Item', {id: item.id})}>
                  <ItemCard item={item} showItem={showItemHandler}/>
                </Pressable>
              ))}
            </ScrollView>
          ) : (
            <H3>{I18n.t('No bookmarks')}</H3>
          )}
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookmarksTabScreen;
