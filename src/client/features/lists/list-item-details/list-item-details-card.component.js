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
  DetailsInfoTextContainer,
  DetailsInfoTextPressable,
  DetailsText
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
        <DetailsInfoTextContainer>
          <DetailsText>{name}</DetailsText>
        </DetailsInfoTextContainer>
        <DetailsInfoTextPressable
          onPress={() => WebBrowser.openBrowserAsync(url)}
        >
          <DetailsText>
            Link to produkt{' '}
            <Icon name='external-link-alt' type='font-awesome-5' size={20} />
          </DetailsText>
        </DetailsInfoTextPressable>
        <DetailsInfoTextContainer>
          <DetailsText>kr {price}</DetailsText>
        </DetailsInfoTextContainer>
        <DetailsInfoTextContainer>
          <DetailsText>Quantity: {quantity}</DetailsText>
        </DetailsInfoTextContainer>
        <DetailsInfoTextContainer>
          <DetailsText>{description}</DetailsText>
        </DetailsInfoTextContainer>
      </DetailsInfoContainer>
    </DetailsCard>
  );
};
