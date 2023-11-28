import {StyleSheet} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const StylesDark = {
  screen: StyleSheet.create({
    container: {
      flex: 1,
    },
  }),
  header: StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  }),
  page: StyleSheet.create({
    container: {
      backgroundColor: '#000',
      padding: 12,
      color: '#FFF',
      flex: 1,
    },
    h1: {
      fontSize: 18,
      color: '#FFF',
    },
    h2: {
      fontSize: 16,
      color: '#FFF',
    },
    h3: {
      fontSize: 12,
      color: '#AAA',
    },
    center: {
      textAlign: 'center',
      marginLeft: 100,
      marginRight: 100,
      marginBottom: 15,
    },
    pinTopLeft: {
      position: 'absolute',
      top: 12,
      left: 12,
    },
    pinTopRight: {
      position: 'absolute',
      top: 12,
      right: 12,
    },
  }),
  grid: StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      margin: 10,
    },
    image: {
      margin: 10,
    }
  }),
  search: StyleSheet.create({
    container: {
      borderStyle: 'solid',
      borderRadius: 5,
      borderWidth: 1,
      paddingRight: 12,
      borderColor: '#222',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      paddingLeft: 12,
      paddingTop: 4,
      paddingBottom: 4,
    },
    button: {
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 4,
      paddingBottom: 4,
      marginTop: 4,
      marginBottom: 4,
      backgroundColor: '#222',
      borderRadius: 5,
    },
    numbers: {
      fontSize: 16,
      color: '#FFF',
      letterSpacing: 8,
    },
  }),
  section: StyleSheet.create({
    container: {
      marginTop: 16,
      marginBottom: 16,
    },
    heading: {
      marginBottom: 12,
    },
  }),
  card: StyleSheet.create({
    container: {
      marginTop: 16,
      marginBottom: 16,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    card: {
      marginRight: 8,
      marginBottom: 8,
    },
    image: {
      height: 200,
    },
    title: {
      fontSize: 12,
      color: '#FFF',
      marginTop: 4,
      marginBottom: 4,
    },
  }),
  checklist: StyleSheet.create({
    container: {
      marginTop: 16,
      marginBottom: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
    container2: {
      marginTop: 8,
      marginBottom: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    containerHead: {
      marginBottom: 16,
      paddingBottom: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomColor: '#FFF',
      borderBottomWidth: 1,
    },
    checkbox: {
      color: '#FFF',
    },
    label: {
      fontSize: 12,
      color: '#FFF',
      marginLeft: 8,
    },
  }),
  button: StyleSheet.create({
    container: {
      marginTop: 16,
      marginBottom: 16,
      padding: 12,
      backgroundColor: '#222',
      borderRadius: 5,
    },
  }),
  dropdown: StyleSheet.create({
    container: {
      color: '#FFF',
    },
  }),
  colors: {
    primary: '#222',
    secondary: '#FFF',
    tertiary: '#FFCF00',
  }
};

export const StylesLight = {
  screen: StyleSheet.create({
    container: {
      flex: 1,
    },
  }),
  header: StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  }),
  page: StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
      padding: 12,
      color: '#000',
      flex: 1,
    },
    h1: {
      fontSize: 18,
      color: '#000',
    },
    h2: {
      fontSize: 16,
      color: '#000',
    },
    h3: {
      fontSize: 12,
      color: '#AAA',
    },
    center: {
      textAlign: 'center',
      marginLeft: 100,
      marginRight: 100,
      marginBottom: 15,
    },
    pinTopLeft: {
      position: 'absolute',
      top: 12,
      left: 12,
    },
    pinTopRight: {
      position: 'absolute',
      top: 12,
      right: 12,
    },
  }),
  grid: StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      margin: 10,
    },
    image: {
      margin: 10,
    }
  }),
  search: StyleSheet.create({
    container: {
      borderStyle: 'solid',
      borderRadius: 5,
      borderWidth: 1,
      paddingRight: 12,
      borderColor: '#CCC',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      paddingLeft: 12,
      paddingTop: 4,
      paddingBottom: 4,
    },
    button: {
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 4,
      paddingBottom: 4,
      marginTop: 4,
      marginBottom: 4,
      backgroundColor: '#CCC',
      borderRadius: 5,
    },
    numbers: {
      fontSize: 16,
      color: '#000',
      letterSpacing: 8,
    },
  }),
  section: StyleSheet.create({
    container: {
      marginTop: 16,
      marginBottom: 16,
    },
    heading: {
      marginBottom: 12,
    },
  }),
  card: StyleSheet.create({
    container: {
      marginTop: 16,
      marginBottom: 16,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    card: {
      marginRight: 8,
      marginBottom: 8,
    },
    image: {
      height: 200,
    },
    title: {
      fontSize: 12,
      color: '#000',
      marginTop: 4,
      marginBottom: 4,
    },
  }),
  checklist: StyleSheet.create({
    container: {
      marginTop: 16,
      marginBottom: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
    container2: {
      marginTop: 8,
      marginBottom: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    containerHead: {
      marginBottom: 16,
      paddingBottom: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomColor: '#000',
      borderBottomWidth: 1,
    },
    checkbox: {
      color: '#000',
    },
    label: {
      fontSize: 12,
      color: '#000',
      marginLeft: 8,
    },
  }),
  button: StyleSheet.create({
    container: {
      marginTop: 16,
      marginBottom: 16,
      padding: 12,
      backgroundColor: '#CCC',
      borderRadius: 5,
    },
  }),
  dropdown: StyleSheet.create({
    container: {
      color: '#000',
    },
  }),
  colors: {
    primary: '#CCC',
    secondary: '#000',
    tertiary: '#FFCF00',
  }
};

export var Styles = {
  s: StylesDark,
};

try {
  AsyncStorage.getItem('mode').then(r => {
    if (r === 'light') {
      Styles.s = StylesLight;
    } else if (r === 'dark') {
      Styles.s = StylesDark;
    } else {
      Styles.s = StylesDark;
    }
  });
} catch (e) {
  console.log('Error');
}
