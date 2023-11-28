import {I18n} from "i18n-js";
import translations from "./translations.json";

import * as RNLocalize from 'react-native-localize';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const systemLocale = RNLocalize.getLocales()[0].languageCode;

// configure i18n
const i18n = new I18n({...translations});
i18n.defaultLocale = 'en';
i18n.enableFallback = true;
try {
  AsyncStorage.getItem('lang').then((value) => {
    console.log('lang', value);
    if (value) {
      i18n.locale = value;
    } else {
      i18n.locale = systemLocale;
    }
  });
} catch (e) {
  console.log(e);
}

export default i18n;
