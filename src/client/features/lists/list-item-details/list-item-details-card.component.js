import React from 'react';
import { Pressable } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Icon } from 'react-native-elements';

import {
  DetailsCard,
  DetailsImageContainer,
  DetailsImage,
  DetailIconContainer,
  DetailsInfoContainer,
  DetailsTitle,
  DetailsLinkText,
  DetailsPrice,
  DetailsComment,
  DetailsQuantity
} from './list-item-details-card.styles';

export const ListItemDetailsCard = ({ details }) => {
  const { url, name, price, quantity, external_image, description } = details;
  return (
    <DetailsCard>
      <DetailsImageContainer>
        <DetailsImage
          source={{
            uri: external_image
          }}
        />
      </DetailsImageContainer>
      <DetailIconContainer>
        <Icon name='playlist-add' type='material' />
      </DetailIconContainer>
      <DetailsInfoContainer>
        <DetailsTitle>{name}</DetailsTitle>
        <Pressable onPress={() => WebBrowser.openBrowserAsync(url)}>
          <DetailsLinkText>
            Link to produkt{' '}
            <Icon name='external-link-alt' type='font-awesome-5' size={20} />
          </DetailsLinkText>
        </Pressable>
        <DetailsPrice>{price}</DetailsPrice>
        <DetailsQuantity>{quantity}</DetailsQuantity>
        <DetailsComment>{description}</DetailsComment>
      </DetailsInfoContainer>
    </DetailsCard>
  );
};
