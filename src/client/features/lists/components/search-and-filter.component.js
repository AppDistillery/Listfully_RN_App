import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { IconButton, Searchbar } from 'react-native-paper';

const SearchContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.space[3]};
`;

const SearchBar = styled(View)`
  flex: 5;
  flex-direction: row;
`;

const Filter = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const SearchAndFilter = () => {
  return (
    <SearchContainer>
      <SearchBar>
        <Searchbar icon='magnify' placeholder='Søk' />
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
  );
};
