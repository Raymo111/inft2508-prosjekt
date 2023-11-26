import {Text, View} from 'react-native';
import {Styles} from './Styles';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';

export class Item {
  id: number | null = null;
  title: string | null = null;
  description: string | null = null;
  price: number | null = null;
  location: string | null = null;
  contact: string | null = null;
  category: string | null = null;
  images: [
    {
      id: number;
      url: string;
      width: number;
      height: number;
    }
  ] | null = null;
}

export class News {
  id: number | null = null;
  date: string | null = null;
  source: string | null = null;
  text: string | null = null;
}

export const Section = (props: { children: any }) => {
  return <View style={Styles.section.container}>{props.children}</View>;
};

export const SectionHeading = (props: { children: any }) => {
  return <View style={Styles.section.heading}>{props.children}</View>;
};

export const H1 = (props: { children: any }) => {
  return <Text style={Styles.page.h1}>{props.children}</Text>;
};

export const H3 = (props: { children: any }) => {
  return <Text style={Styles.page.h3}>{props.children}</Text>;
};

export const ChecklistEntry = (props: { value: boolean, onValueChange: (value: any) => void, title: string }) => {
  return <View style={Styles.checklist.container}>
    <CheckBox
      value={props.value}
      onValueChange={props.onValueChange}
      tintColors={{true: "#FFCF00", false: "#FFFFFF"}}
    />
    <Text style={Styles.checklist.label}>{props.title}</Text>
  </View>;
}
