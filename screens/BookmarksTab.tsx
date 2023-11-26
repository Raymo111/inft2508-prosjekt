import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {H1, H3, Item, Section, SectionHeading} from "../components/Components";
import {SafeAreaView, ScrollView} from "react-native";
import {Styles} from "../components/Styles";

const BookmarksStack = createNativeStackNavigator();

const BookmarksTabScreen = ({ navigation }: { navigation: any }) => {
  const images = {
    resultPlaceholder: require('../assets/item-placeholder.png'),
  };

  // Initial state
  const [data, setData] = useState(require('../assets/dummydata.json'));
  const [resultsToday, setResultsToday] = useState<Item[]>(
    data.initialResultsToday,
  );
  const [resultsPrevious, setResultsPrevious] = useState<Item[]>(
    data.initialResultsPrevious,
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dateToday, setDateToday] = useState(
    new Date(Date.now()).toLocaleDateString(),
  );

  useEffect(() => {
    fetch('https://cloud.raymond.li/data.json').then(response => {
      response.json().then(res => {
        setData(res);
        setResultsToday(res.initialResultsToday);
        setResultsPrevious(res.initialResultsPrevious);
      });
    });
  }, []);

  const showResultsHandler = (
    imgURL: string,
    title: string | null,
  ) => {
    navigation.navigate('Result', { imgURL, title });
  };

  return (
    <SafeAreaView style={Styles.screen.container}>
      {/* Scrollable page  */}
      <ScrollView style={Styles.page.container}>
        {/*  Today's lottery results */}
        <Section>
          <SectionHeading>
            <H1>Today's Lottery Results</H1>
            <H3>{dateToday}</H3>
          </SectionHeading>
          <ScrollView>
            {/*{resultsToday.length > 0 ? (*/}
            {/*  resultsToday.map(result => (*/}
            {/*    <ItemCard*/}
            {/*      key={result.id}*/}
            {/*      imgURL={result.imgURL ? result.imgURL : images.resultPlaceholder}*/}
            {/*      title={result.title}*/}
            {/*      showItem={showResultsHandler}*/}
            {/*    />*/}
            {/*  ))*/}
            {/*) : (*/}
            {/*  <H3>No results found</H3>*/}
            {/*)}*/}
          </ScrollView>
        </Section>
        {/*  Previous lottery results */}
        <Section>
          <SectionHeading>
            <H1>Previous Lottery Results</H1>
          </SectionHeading>
          <ScrollView>
            {/*{resultsPrevious.length > 0 ? (*/}
            {/*  resultsPrevious.map(result => (*/}
            {/*    <ItemCard*/}
            {/*      key={result.id}*/}
            {/*      imgURL={result.imgURL ? result.imgURL : images.resultPlaceholder}*/}
            {/*      title={result.title}*/}
            {/*      showItem={showResultsHandler}*/}
            {/*    />*/}
            {/*  ))*/}
            {/*) : (*/}
            {/*  <H3>No results found</H3>*/}
            {/*)}*/}
          </ScrollView>
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookmarksTabScreen;
