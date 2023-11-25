import { Image, Text, View } from 'react-native';
import { Styles } from './Styles';
import React from 'react';

export class Item {
  id: number | null = null;
  img: string | null = null;
  title: string | null = null;
}

export class News {
  id: number | null = null;
  img: string | null = null;
  title: string | null = null;
  date: string | null = null;
  source: string | null = null;
  text: string | null = null;
}

export const Logo = (props: any) => {
  return (
    <Image
      source={require('../assets/logo.png')}
      style={Styles.header.icon}
      {...props}
    />
  );
};

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
