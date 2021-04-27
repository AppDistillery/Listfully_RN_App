import React from 'react';

import {
  ItemCard,
  ImageContainer,
  ItemInfoContainer,
  ItemMenuContainer,
  Images,
  Title,
  LinkText,
  Price,
  Quantity
} from './list-items-card.styles';

export const ListItemsCard = ({ listItem }) => {
  const { name, url, price, external_image, quantity } = listItem;

  return (
    <ItemCard>
      <ImageContainer>
        <Images
          source={{
            uri: external_image
          }}
        />
      </ImageContainer>
      <ItemInfoContainer>
        <Title>{name}</Title>
        <LinkText>Link</LinkText>
        <Price>kr {price}</Price>
        <Quantity>Quantity: {quantity}</Quantity>
      </ItemInfoContainer>
      <ItemMenuContainer></ItemMenuContainer>
    </ItemCard>
  );
};
