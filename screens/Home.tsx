import React, {useEffect, useState} from 'react';
import {
  H3,
  Item,
  Section,
} from '../components/Components';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import {Styles} from '../components/Styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ItemCard from '../components/ItemCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from "@react-navigation/native";
import I18n from "../localization/I18n";

export const endpoint = 'https://cloud.raymond.li/proj/';

const HomeScreen = ({navigation}: { navigation: any }) => {

  // Initial state
  const [data, setData] = useState(require('../assets/dummydata.json'));
  const [items, setItems] = useState<Item[]>(data.items);
  const [searchedItems, setSearchedItems] = useState<Item[]>([]);
  const [filters, setFilters] = useState<string>("");
  const [lang, setLang] = useState('');
  const [mode, setMode] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(endpoint + 'data.json').then(response => {
      response.json().then(res => {
        setData(res);
        setItems(res.items);
      });
    });
  }, []);

  useFocusEffect(() => {
    try {
      AsyncStorage.getItem('filters').then(value => {
        if (value !== null && filters != value) {
          setFilters(value);
        }
      });
      AsyncStorage.getItem('lang').then(value => {
        if (value !== null && lang != value) setLang(value);
      });
      AsyncStorage.getItem('mode').then(value => {
        if (value !== null && mode != value) setMode(value);
      });
    } catch (e) {
      console.log('Error');
    }
  });

  useEffect(() => {
    if (filters.trim().length > 0) {
      let f: Record<string, boolean> = JSON.parse(filters);
      setItems(data.items.filter((item: Item) => {
        return f[item.category ?? ''] && f[item.location ?? ''];
      }));
    }
  }, [filters]);

  useEffect(() => {
    searchChangedHandler(search); // works
  }, [items]);

  const searchChangedHandler = (search: string) => {
    setSearch(search);
    const matchedItems: Item[] = [];
    if (search.trim().length > 0) {
      items.map(value => {
        if (value.title && value.title.toLowerCase().includes(search.toLowerCase())) {
          matchedItems.push(value);
        }
      });
      setSearchedItems(matchedItems); // Set the filtered items
    } else {
      setSearchedItems(items); // Reset filtered items to original items
    }
  };

  const showItemHandler = (
    id: number,
  ) => {
    navigation.navigate('Item', {id});
  };

  return (
    <SafeAreaView style={Styles.s.screen.container}>
      {/* Page */}
      <View style={Styles.s.page.container}>
        {/* Search bar */}
        <View style={Styles.s.search.container}>
          <TextInput
            style={Styles.s.search.input}
            placeholder={I18n.t('Search')}
            placeholderTextColor={'#888'}
            onChangeText={searchChangedHandler}
          />
          <Pressable style={Styles.s.search.button}>
            <MaterialIcons name="search" size={24} color="grey"/>
          </Pressable>
        </View>
        {/* Items */}
        <Section>
          <ScrollView>
            <View style={Styles.s.card.container}>
              {searchedItems.length > 0 ? (
                searchedItems.map(item => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    showItem={showItemHandler}
                  />
                ))
              ) : (
                <H3>{I18n.t('No results found')}</H3>
              )}
            </View>
          </ScrollView>
        </Section>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
