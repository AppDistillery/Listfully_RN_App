import React from 'react';
import { Icon } from 'react-native-elements';

import {
  ListsCard,
  CardBlank,
  Title,
  MenuContainer,
  ListNameContainer,
  ImagesContainer,
  ImageView1,
  ImageView2,
  Images,
  ListMenuLock,
  ListMenuIcon
} from './lists-card.styles';

export const ListCard = ({ lists }) => {
  const { name, items } = lists;

  // if (item.empty) {
  //   return <CardBlank />;
  // }
  return (
    <ListsCard>
      <MenuContainer>
        <ListMenuLock>
          <Icon name='lock' type='font-awesome-5' size={15} />
        </ListMenuLock>
        <ListMenuIcon>
          <Icon name='dots-three-horizontal' type='entypo' size={45} />
        </ListMenuIcon>
      </MenuContainer>
      <ListNameContainer>
        <Title>{name}</Title>
      </ListNameContainer>
      <ImagesContainer>
        <ImageView1>
          <Images
            source={{
              uri: items[0].external_image
            }}
          />
        </ImageView1>
        <ImageView2>
          <Images
            source={{
              uri: items[1].external_image
            }}
          />
        </ImageView2>
      </ImagesContainer>
    </ListsCard>
  );
};
