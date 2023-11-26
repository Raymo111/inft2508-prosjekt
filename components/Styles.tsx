import {StyleSheet} from 'react-native';

export const Styles = {
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
    }
  }),
  grid: StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
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
    checkbox: {
      color: '#FFF',
    },
    label: {
      fontSize: 12,
      color: '#FFF',
      marginLeft: 8,
    },
  }),
};
// TODO: style all the new pages
