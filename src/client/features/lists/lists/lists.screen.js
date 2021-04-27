import React from 'react';
import { FlatList } from 'react-native';
import { ListCard } from './lists-card.component';
import { DATA } from '../../../services/MockData';
import { SafeArea } from '../../../components/utility/safe-area.component';

import {
  ListPagesContainer,
  PageTitle,
  FlexContainer,
  FlexPressable
} from '../../global.styles';

export const ListsScreen = ({ navigation }) => {
  return (
    <>
      <SafeArea>
        <ListPagesContainer>
          <PageTitle>Navn sine lister</PageTitle>
          <FlexContainer>
            <FlatList
              data={DATA}
              // formatData(DATA, numColums)
              renderItem={({ item }) => {
                return (
                  <FlexPressable
                    onPress={() =>
                      navigation.navigate('List items', {
                        listItems: item
                      })
                    }
                  >
                    <ListCard lists={item} />
                  </FlexPressable>
                );
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
