import {Text, View} from 'react-native';
import {Styles} from './Styles';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {Picker} from "@react-native-picker/picker";

export class Item {
  id: number = 0;
  title: string | null = null;
  description: string | null = null;
  price: number = 0;
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

export const Section = (props: { children: any }) => {
  return <View style={Styles.s.section.container}>{props.children}</View>;
};

export const SectionHeading = (props: { children: any }) => {
  return <View style={Styles.s.section.heading}>{props.children}</View>;
};

export const Grid = (props: { children: any }) => {
  return <View style={Styles.s.grid.container}>{props.children}</View>;
}

export const Title = (props: { children: any }) => {
  return <Text style={Styles.s.page.title}>{props.children}</Text>;
};

export const H1 = (props: { children: any }) => {
  return <Text style={Styles.s.page.h1}>{props.children}</Text>;
};

export const H2 = (props: { children: any }) => {
  return <Text style={Styles.s.page.h2}>{props.children}</Text>;
};

export const H3 = (props: { children: any }) => {
  return <Text style={Styles.s.page.h3}>{props.children}</Text>;
};

export const ChecklistEntry = (props: { value: boolean, onValueChange: (value: any) => void, title: string }) => {
  return <View style={Styles.s.checklist.container}>
    <CheckBox
      value={props.value}
      onValueChange={props.onValueChange}
      tintColors={{true: "#FFCF00", false: "#FFFFFF"}}
    />
    <Text style={Styles.s.checklist.label}>{props.title}</Text>
  </View>;
}

export const Dropdown = (props: {
  selectedValue: string, onValueChange: (itemValue: any, _: any) => void, children: React.ReactNode
}) => {
  return <Picker selectedValue={props.selectedValue} mode={"dropdown"} selectionColor={Styles.s.colors.secondary}
                 dropdownIconColor={Styles.s.colors.secondary} style={Styles.s.dropdown.container}
                 onValueChange={props.onValueChange}>
    {props.children}
  </Picker>;
}
