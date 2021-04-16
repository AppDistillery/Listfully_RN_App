import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { SafeArea } from '../../../../components/utility/safe-area.component';
import { SearchAndFilter } from '../../components/search-and-filter.component';
import { DATA } from '../../../../services/MockData';

import {
  ListPagesContainer,
  PageTitle,
  ListContainer,
  StyledPressable
} from '../lists-screens.styles';
import { ListCard } from './lists-card.component';

export const ListsScreen = ({ navigation }) => {
  return (
    <>
      <SafeArea>
        <ListPagesContainer>
          <PageTitle>Christine's lists</PageTitle>
          <SearchAndFilter />
          <ListContainer>
            <FlatList
              data={DATA}
              renderItem={({ item }) => {
                return (
                  <StyledPressable
                    onPress={() =>
                      navigation.navigate('List-items', { listItems: item })
                    }
                  >
                    <ListCard lists={item} />
                  </StyledPressable>
                );
              }}
              keyExtractor={(item) => item.id}
              numColumns={2}
            />
          </ListContainer>
        </ListPagesContainer>
      </SafeArea>
    </>
  );
};
