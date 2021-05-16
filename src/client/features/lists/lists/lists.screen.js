import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { ListCard } from './lists-card.component';
import { DATA } from '../../../services/MockData';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { IconButton, Searchbar } from 'react-native-paper';

import {
  ListPagesContainer,
  PageTitle,
  FlexContainer,
  SearchContainer,
  SearchBar,
  Filter
} from '../../global.styles';

export const ListsScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setAllData(DATA);
    setFilteredData(DATA);
  }, []);

  const searchFilter = (text) => {
    if (text) {
      const newData = allData.filter((item) => {
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUppserCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearchQuery(text);
    } else {
      setFilteredData(allData);
      setSearchQuery(text);
    }
  };

  return (
    <>
      <SafeArea>
        <ListPagesContainer>
          <PageTitle>Navn sine lister</PageTitle>
          <SearchContainer>
            <SearchBar>
              <Searchbar
                icon='magnify'
                placeholder='Search'
                value={searchQuery}
                onChangeText={(text) => searchFilter(text)}
              />
            </SearchBar>
            <Filter>
              <IconButton
                icon='filter-outline'
                color='#363743'
                size={25}
                onPress={() => console.log('Pressed')}
              />
            </Filter>
          </SearchContainer>
          <FlexContainer>
            <FlatList
              data={filteredData}
              renderItem={({ item }) => {
                return <ListCard lists={item} navigation={navigation} />;
              }}
              keyExtractor={(item) => item.id}
              numColumns={2}
            />
          </FlexContainer>
        </ListPagesContainer>
      </SafeArea>
    </>
  );
};
