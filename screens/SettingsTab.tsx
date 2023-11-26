import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {SafeAreaView, ScrollView, View} from "react-native";
import {Styles} from "../components/Styles";
import {H1, Section, SectionHeading} from "../components/Components";

const SettingStack = createNativeStackNavigator();

const SettingsTabScreen = ({navigation}: { navigation: any }) => {

  // Initial state
  const [data, setData] = useState(require('../assets/dummydata.json'));
  const [lang, setLang] = useState('en');

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
  }, []/* [myNumbers, numbersWasEmpty]*/);
  return (
    <SafeAreaView style={Styles.screen.container}>
      {/* Scrollable page  */}
      <ScrollView style={Styles.page.container}>
        {/*  Lottery news */}
        <Section>
          <SectionHeading>
            <H1>Lottery News</H1>
          </SectionHeading>
          <View style={Styles.section.container}>
          </View>
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsTabScreen;
