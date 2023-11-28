import React, {useEffect, useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Appearance, SafeAreaView, ScrollView} from "react-native";
import {Styles, StylesDark, StylesLight} from "../components/Styles";
import {H1, H3, Section, SectionHeading} from "../components/Components";
import {Picker} from '@react-native-picker/picker';
import I18n, {systemLocale} from "../localization/I18n";
import {Dropdown} from "../components/Components";

const SettingsTabScreen = () => {

  // Initial state
  const [lang, setLang] = useState('');
  const [mode, setMode] = useState('');

  // Load from storage
  useEffect(() => {
    try {
      AsyncStorage.getItem('lang').then(value => {
        if (value !== null) {
          setLang(value);
        } else {
          setLang('');
        }
      });
      AsyncStorage.getItem('mode').then(value => {
        if (value !== null) {
          setMode(value);
        } else {
          setMode('');
        }
      });
    } catch (e) {
      console.log('Error');
    }
  }, []);

  const updateLang = (newLang: any) => {
    I18n.locale = newLang ? newLang : systemLocale;
    setLang(newLang);
  }

  // Change language and persist to storage
  useEffect(() => {
    try {
      AsyncStorage.setItem('lang', lang).then(r => {
        console.log(r);
      });
    } catch (e) {
      console.log('Error');
    }
  }, [lang]);

  const updateMode = (newMode: any) => {
    if (newMode === 'light') {
      Styles.s = StylesLight
    } else if (newMode === 'dark') {
      Styles.s = StylesDark
    } else if (Appearance.getColorScheme() === 'light') {
      Styles.s = StylesLight
    } else if (Appearance.getColorScheme() === 'dark') {
      Styles.s = StylesDark
    } else {
      Styles.s = StylesDark
    }
    setMode(newMode);
  }

  // Change mode and persist to storage
  useEffect(() => {
    try {
      AsyncStorage.setItem('mode', mode).then(r => {
        console.log(r);
      });
    } catch (e) {
      console.log('Error');
    }
  }, [mode]);

  return (
    <SafeAreaView style={Styles.s.screen.container}>
      {/* Scrollable page  */}
      <ScrollView style={Styles.s.page.container}>
        {/* Settings */}
        <Section>
          <SectionHeading>
            <H1>{I18n.t('Settings')}</H1>
          </SectionHeading>
          {/* Language */}
          <H1>{I18n.t('Language')}</H1>
          <H3>{I18n.t('Note:')} {I18n.t('Restart the app to apply changes')}</H3>
          <Dropdown selectedValue={lang} onValueChange={(itemValue, _) => updateLang(itemValue)}>
            <Picker.Item label={I18n.t("System")} value=""/>
            <Picker.Item label="English" value="en"/>
            <Picker.Item label="Français" value="fr"/>
            <Picker.Item label="Norsk (Bokmål)" value="no"/>
            <Picker.Item label="中文" value="zh"/>
          </Dropdown>
          {/* Mode */}
          <H1>{I18n.t('Mode')}</H1>
          <Dropdown selectedValue={mode} onValueChange={(itemValue, _) => updateMode(itemValue)}>
            <Picker.Item label={I18n.t("System")} value=""/>
            <Picker.Item label={I18n.t("Light")} value="light"/>
            <Picker.Item label={I18n.t("Dark")} value="dark"/>
          </Dropdown>
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsTabScreen;
