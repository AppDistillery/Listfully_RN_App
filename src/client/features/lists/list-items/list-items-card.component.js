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
  TextLarge,
  TextSmall,
  ItemMenuLinks,
  ItemMenuLinksText,
  NavToDetailsPressable
} from './list-items-card.styles';

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
            <TextSmall>Quantity: {quantity}</TextSmall>
          </InfoQuantityContainer>
        </ItemInfoContainer>
      </NavToDetailsPressable>
      <ItemMenuContainer>
        <ItemMenuLinks onPress={() => WebBrowser.openBrowserAsync(url)}>
          <Icon name='link' type='material-community' size={30} />
          <ItemMenuLinksText>Product link</ItemMenuLinksText>
        </ItemMenuLinks>
        <ItemMenuLinks onPress={() => console.log('Pressed')}>
          <Icon name='playlist-plus' type='material-community' size={30} />
          <ItemMenuLinksText>Add to list</ItemMenuLinksText>
        </ItemMenuLinks>
        <ItemMenuLinks onPress={() => console.log('Pressed')}>
          <Icon name='share' type='material-community' size={30} />
          <ItemMenuLinksText>Share</ItemMenuLinksText>
        </ItemMenuLinks>
      </ItemMenuContainer>
    </ItemCard>
  );
};
