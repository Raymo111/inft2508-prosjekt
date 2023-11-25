import React, { useEffect, useState } from 'react';
import {
  H3,
  Item,
  Section,
} from '../components/Components';
import {
  ImageProps,
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
  const images = {
    itemPlaceholder: require('../assets/item-placeholder.png'),
  };

  // Initial state
  const [data, setData] = useState(require('../assets/dummydata.json'));
  const [items, setItems] = useState<Item[]>(
    data.items,
  );
  const [lang, setLang] = useState('en');
  const [mode, setMode] = useState('dark');
  const endpoint = 'http://localhost:3000/num';

  useEffect(() => {
    fetch('https://cloud.raymond.li/projdata.json').then(response => {
      response.json().then(res => {
        setData(res);
        setItems(res.items);
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
    img: ImageProps,
    title: string | null,
  ) => {
    navigation.navigate('Result', { img, title });
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
      {/* Scrollable page  */}
      <ScrollView style={Styles.page.container}>
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
                    img={item.img ? item.img : images.itemPlaceholder}
                    title={item.title}
                    showItem={showItemHandler}
                  />
                ))
              ) : (
                <H3>No results found</H3>
              )}
            </View>
          </ScrollView>
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
