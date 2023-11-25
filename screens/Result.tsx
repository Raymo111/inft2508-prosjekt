import React from 'react';
import { SafeAreaView, Image, ScrollView } from 'react-native';
import { Styles } from '../components/Styles';
import { H1, H3 } from '../components/Components';

// @ts-ignore
const ResultScreen = ({ route }: { route: any }) => {
  const { img, highlight, label, numbers } = route.params;
  return (
    <SafeAreaView style={Styles.screen.container}>
      <ScrollView style={Styles.page.container}>
        <Image source={img} />
        {highlight && <H1>{highlight}</H1>}
        <H3>{label}</H3>
        <H1>{numbers}</H1>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultScreen;
