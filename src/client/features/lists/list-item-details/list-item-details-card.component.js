import React from 'react';
import { Pressable } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Icon } from 'react-native-elements';

import {
  DetailsCard,
  DetailsImageContainer,
  DetailsImage,
  DetailMenuContainer,
  DetailsMenuLinks,
  DetailsInfoContainer,
  DetailsInfoTextContainer,
  DetailsInfoTextContainerLarge,
  DetailsInfoTextContainerMedium,
  DetailsInfoTextContainerSmall
} from './list-item-details-card.styles';
import {
  SpacerFlex1,
  SpacerFlex05,
  TextSmall,
  TextLarge,
  TextMedium
} from '../../global.styles';

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
      <DetailMenuContainer>
        <SpacerFlex05 />
        <DetailsMenuLinks onPress={() => WebBrowser.openBrowserAsync(url)}>
          <Icon name='link' type='material-community' size={35} />
          <TextSmall>Link</TextSmall>
        </DetailsMenuLinks>
        <DetailsMenuLinks onPress={() => console.log('Pressed')}>
          <Icon name='playlist-plus' type='material-community' size={35} />
          <TextSmall>Add to list</TextSmall>
        </DetailsMenuLinks>
        <DetailsMenuLinks onPress={() => console.log('Pressed')}>
          <Icon name='share' type='material-community' size={35} />
          <TextSmall>Share</TextSmall>
        </DetailsMenuLinks>
        <DetailsMenuLinks onPress={() => console.log('Pressed')}>
          <Icon
            name='square-edit-outline'
            type='material-community'
            size={35}
          />
          <TextSmall>Edit info</TextSmall>
        </DetailsMenuLinks>
        <SpacerFlex05 />
      </DetailMenuContainer>
      <DetailsInfoContainer>
        <DetailsInfoTextContainerSmall>
          <TextLarge>{name}</TextLarge>
        </DetailsInfoTextContainerSmall>
        <DetailsInfoTextContainerSmall>
          <TextLarge>kr {price}</TextLarge>
        </DetailsInfoTextContainerSmall>
        <DetailsInfoTextContainerSmall>
          <TextLarge>Quantity: {quantity}</TextLarge>
        </DetailsInfoTextContainerSmall>
        <DetailsInfoTextContainerLarge>
          <TextMedium>Description:</TextMedium>
          <TextLarge>{description}</TextLarge>
        </DetailsInfoTextContainerLarge>
      </DetailsInfoContainer>
    </DetailsCard>
  );
};
