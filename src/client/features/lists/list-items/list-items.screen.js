import React from 'react';
import { Pressable, FlatList } from 'react-native';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { ListItemsCard } from './list-items-card.component';

import {
  ListPagesContainer,
  PageTitle,
  FlexContainer
} from '../../global.styles';
import {
  BackBtn,
  BackBtnContainer,
  BackBtnRightSpace
} from '../../../components/utility/back-btn.component';
import { SearchAndFilter } from '../../../components/utility/search-and-filter.component';

export const ListItemsScreen = ({ navigation, route }) => {
  const { name, items } = route.params.listItems;

  return (
    <>
      <SafeArea>
        <ListPagesContainer>
          <BackBtn navigate={navigation} name={name} />
          <SearchAndFilter />
          <FlexContainer>
            <FlatList
              data={items}
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
