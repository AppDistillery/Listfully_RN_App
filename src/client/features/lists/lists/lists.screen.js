import React from 'react';
import { FlatList } from 'react-native';
import { ListCard } from './lists-card.component';
import { DATA } from '../../../services/MockData';
import { SafeArea } from '../../../components/utility/safe-area.component';

import {
  ListPagesContainer,
  PageTitle,
  FlexContainer
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
