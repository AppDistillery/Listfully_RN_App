import React from 'react';
import { Text } from 'react-native';
import { SafeArea } from '../../../../components/utility/safe-area.component';
import { SearchAndFilter } from '../../components/search-and-filter.component';

import {
  ListPagesContainer,
  PageTitle,
  ListContainer
} from '../lists-screens.styles';

export const ListItemsScreen = ({ route }) => {
  const { name, items } = route.params.listItems;
  return (
    <>
      <SafeArea>
        <ListPagesContainer>
          <PageTitle>{name}</PageTitle>
          <SearchAndFilter />
          {items.map((item) => {
            return <Text key={item.id}>{item.name}</Text>;
          })}
        </ListPagesContainer>
      </SafeArea>
    </>
  );
};
