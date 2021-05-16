import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { ListItemsCard } from './list-items-card.component';
import { BackBtn } from '../../../components/utility/back-btn.component';
import { IconButton, Searchbar } from 'react-native-paper';

import {
  ListPagesContainer,
  FlexContainer,
  SearchContainer,
  SearchBar,
  Filter
} from '../../global.styles';

export const ListItemsScreen = ({ navigation, route }) => {
  const { name, items } = route.params.listItems;
  const [searchQuery, setSearchQuery] = useState('');
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setAllData(items);
    setFilteredData(items);
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
          <BackBtn navigate={navigation} name={name} />
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
                return (
                  <ListItemsCard listItem={item} navigation={navigation} />
                );
              }}
              keyExtractor={(item) => item.id}
            />
          </FlexContainer>
        </ListPagesContainer>
      </SafeArea>
    </>
  );
};
