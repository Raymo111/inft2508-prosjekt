import React, { useEffect, useState } from 'react';
import {
  H1,
  H3, Item,
  News,
  Section,
  SectionHeading,
} from '../components/Components';
import { ImageProps, SafeAreaView, ScrollView, View } from 'react-native';
import { Styles } from '../components/Styles';

const SettingsScreen = ({ navigation }: { navigation: any }) => {

  // Initial state
  const [data, setData] = useState(require('../assets/dummydata.json'));

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

export default SettingsScreen;
