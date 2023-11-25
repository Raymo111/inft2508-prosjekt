import React, { useEffect, useState } from 'react';
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
import { Styles } from '../components/Styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ItemCard from '../components/ItemCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }: { navigation: any }) => {

  // Initial state
  const [data, setData] = useState(require('../assets/dummydata.json'));
  const [items, setItems] = useState<Item[]>(
    data.items,
  );
  const [lang, setLang] = useState('en');
  const [mode, setMode] = useState('dark');
  const endpoint = 'https://cloud.raymond.li/proj/';

  useEffect(() => {
    fetch(endpoint + 'data.json').then(response => {
      response.json().then(res => {
        setData(res);

        // Add image to items
        setItems(res.items.map((item: Item) => {
          item.imgURL = endpoint + 'img/' + item.id + '.jpg';
          return item;
        }));
      });
    });
    try {
      AsyncStorage.getItem('lang').then(value => {
        if (value !== null) {
          setLang(value);
        }
      });
      AsyncStorage.getItem('mode').then(value => {
        if (value !== null) {
          setMode(value);
        }
      });
    } catch (e) {
      console.log('Error');
    }
  }, []);

  useEffect(() => {
    try {
      // Persist to storage
      AsyncStorage.setItem('lang', lang).then(r => {
        console.log(r);
      });

      // Send to server
    //   if (myNumbers.trim().length === 0) {
    //     // DELETE when empty
    //     fetch(endpoint, {
    //       method: 'DELETE',
    //     }).then(response => {
    //       response.json().then(res => {
    //         console.log(res);
    //       });
    //     });
    //   } else if (numbersWasEmpty) {
    //     // POST when was empty
    //     fetch(endpoint, {
    //       method: 'POST',
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         numbers: myNumbers,
    //       }),
    //     }).then(response => {
    //       response.json().then(res => {
    //         console.log(res);
    //       });
    //     });
    //   } else {
    //     // PUT when not empty
    //     fetch(endpoint, {
    //       method: 'PUT',
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         numbers: myNumbers,
    //       }),
    //     }).then(response => {
    //       response.json().then(res => {
    //         console.log(res);
    //       });
    //     });
    //   }
    } catch (e) {
      console.log('Error');
    }
  }/*, [myNumbers, numbersWasEmpty]*/);

  const showItemHandler = (
    img: string,
    title: string | null,
    width: number,
    height: number,
  ) => {
    navigation.navigate('Result', { img, title, width, height });
  };

  const searchChangedHandler = (search: string) => {
    const matchedItems: Item[] = [];
    if (search.trim().length > 0) {
      items.map(value => {
        if (value.title && value.title.toLowerCase().includes(search.toLowerCase())) {
          matchedItems.push(value);
        }
      });
      setItems(matchedItems);
    } else {
      setItems(data.items);
    }
  };

  return (
    <SafeAreaView style={Styles.screen.container}>
      {/* Page  */}
      <View style={Styles.page.container}>
        {/* Search bar */}
        <View style={Styles.search.container}>
          <TextInput
            style={Styles.search.input}
            placeholder="Search"
            placeholderTextColor={'#888'}
            onChangeText={searchChangedHandler}
          />
          <Pressable style={Styles.search.button}>
            <MaterialIcons name="search" size={24} color="grey" />
          </Pressable>
        </View>
        {/* Items */}
        <Section>
          <ScrollView>
            <View style={Styles.flexwrapCard.container}>
              {items.length > 0 ? (
                items.map(item => (
                  <ItemCard
                    key={item.id}
                    imgURL={item.imgURL ? item.imgURL : endpoint + 'item-placeholder.png'}
                    title={item.title}
                    width={item.width ? item.width : 200}
                    height={item.height ? item.height : 200}
                    showItem={showItemHandler}
                  />
                ))
              ) : (
                <H3>No results found</H3>
              )}
            </View>
          </ScrollView>
        </Section>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
