import React from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { ListsCard } from './lists-card.styles';

export const ListCard = ({ lists }) => {
  const { name, items } = lists;

  return (
    <ListsCard>
      <Text>{name}</Text>
      {items.map((item) => {
        return <Text key={item.id}>{item.name}</Text>;
      })}
    </ListsCard>
  );
};
