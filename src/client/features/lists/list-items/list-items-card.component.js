import React from 'react';
import { Icon } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';

import {
  ItemCard,
  ImageContainer,
  ItemInfoContainer,
  ItemMenuContainer,
  Images,
  InfoTitleContainer,
  InfoPriceContainer,
  InfoQuantityContainer,
  ItemMenuLinks,
  NavToDetailsPressable
} from './list-items-card.styles';
import { TextLarge, TextMedium, TextSmall } from '../../global.styles';

export const ListItemsCard = ({ listItem, navigation }) => {
  const { name, url, price, external_image, quantity } = listItem;

  return (
    <ItemCard>
      <NavToDetailsPressable
        onPress={() =>
          navigation.navigate('List item details', {
            listItemDetails: listItem
          })
        }
      >
        <ImageContainer>
          <Images
            source={{
              uri: external_image
            }}
          />
        </ImageContainer>
        <ItemInfoContainer>
          <InfoTitleContainer>
            <TextLarge>{name}</TextLarge>
          </InfoTitleContainer>
          <InfoPriceContainer>
            <TextLarge>kr {price}</TextLarge>
          </InfoPriceContainer>
          <InfoQuantityContainer>
            <TextMedium>Quantity: {quantity}</TextMedium>
          </InfoQuantityContainer>
        </ItemInfoContainer>
      </NavToDetailsPressable>
      <ItemMenuContainer>
        <ItemMenuLinks onPress={() => WebBrowser.openBrowserAsync(url)}>
          <Icon name='link' type='material-community' size={30} />
          <TextSmall>Product link</TextSmall>
        </ItemMenuLinks>
        <ItemMenuLinks onPress={() => console.log('Pressed')}>
          <Icon name='playlist-plus' type='material-community' size={30} />
          <TextSmall>Add to list</TextSmall>
        </ItemMenuLinks>
        <ItemMenuLinks onPress={() => console.log('Pressed')}>
          <Icon name='share' type='material-community' size={30} />
          <TextSmall>Share</TextSmall>
        </ItemMenuLinks>
      </ItemMenuContainer>
    </ItemCard>
  );
};
