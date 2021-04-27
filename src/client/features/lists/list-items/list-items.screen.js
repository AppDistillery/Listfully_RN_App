import React from 'react';
import { Pressable, FlatList } from 'react-native';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { ListItemsCard } from './list-items-card.component';

import {
  ListPagesContainer,
  PageTitle,
  FlexContainer
} from '../../global.styles';

export const ListItemsScreen = ({ navigation, route }) => {
  const { name, items } = route.params.listItems;

  return (
    <>
      <SafeArea>
        <ListPagesContainer>
          <PageTitle>{name}</PageTitle>
          <FlexContainer>
            <FlatList
              data={items}
              renderItem={({ item }) => {
                return (
                  <Pressable
                    onPress={() =>
                      navigation.navigate('List item details', {
                        listItemDetails: item
                      })
                    }
                  >
                    <ListItemsCard listItem={item} />
                  </Pressable>
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
