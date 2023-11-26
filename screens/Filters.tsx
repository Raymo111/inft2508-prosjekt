import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Styles} from '../components/Styles';
import {endpoint} from "./Home";
import {ChecklistEntry, H3} from "../components/Components";

// @ts-ignore
const FiltersScreen = () => {
  const [filters, setFilters] = React.useState<Record<string, boolean>>({});

  // Initialize selections
  useEffect(() => {
    try {
      AsyncStorage.getItem('filters').then(value => {
        if (value !== null) {
          setFilters(JSON.parse(value));
        } else {
          fetch(endpoint + 'data.json').then(response => {
            response.json().then(res => {
              let selection: Record<string, boolean> = {};
              let names = new Set([...res.categories.map((c: { name: string; }) => c.name), ...res.locations.map((l: {
                name: string;
              }) => l.name)]);
              names.forEach(name => {
                selection[name] = true;
              });
              setFilters(selection);
            });
          });
        }
      });
    } catch (e) {
      console.log('Error');
    }
  }, []);

  // Save selections to storage
  useEffect(() => {
    try {
      // Persist to storage
      AsyncStorage.setItem('filters', JSON.stringify(filters)).then(r => {
        console.log(r);
      });
    } catch (e) {
      console.log('Error');
    }
  }, [filters]);

  const handleSelChg = ({title, value}: { title: string, value: boolean }) => {
    setFilters({...filters, [title]: value});
  };

  return (
    <SafeAreaView style={Styles.screen.container}>
      <ScrollView style={Styles.page.container}>
        {Object.keys(filters).length > 0 ? (
          Object.entries(filters).map(([k, v], index) => (
            <ChecklistEntry key={index} value={v} onValueChange={(value) => handleSelChg({title: k, value})} title={k}/>
          ))
        ) : (
          <H3>No filters found</H3>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FiltersScreen;
