import React, { useState } from 'react';
import { Icon } from 'react-native-elements';

import {
  ListsCard,
  Title,
  MenuPressable,
  ListNameContainer,
  ImagesContainer,
  ImageView1,
  ImageView2,
  Images,
  ListMenuLock,
  ListMenuIcon,
  NavToItemsPressable,
  ListMenuHeaderText,
  ListMenuText,
  ListMenuIcons
} from './lists-card.styles';

export const ListCard = ({ lists, navigation }) => {
  const { name, items } = lists;
  const [menuVisible, setMenuVisible] = useState(false);
  const [availabilityMenuVisible, setAvailabilityMenuVisible] = useState(false);
  const [lockColor, setLockColor] = useState('#DA532F');
  const [lockType, setLockType] = useState('lock');

  if (menuVisible && !availabilityMenuVisible) {
    return (
      <ListsCard>
        <MenuPressable onPress={() => setMenuVisible(!menuVisible)}>
          <Icon
            name='close'
            type='material-community'
            size={35}
            color='#8B8C97'
          />
          <ListMenuHeaderText>Close</ListMenuHeaderText>
        </MenuPressable>
        <MenuPressable onPress={() => console.log('Pressed menu')}>
          <ListMenuIcons>
            <Icon
              name='share'
              type='material-community'
              size={35}
              color='#363743'
            />
          </ListMenuIcons>
          <ListMenuText>Share list</ListMenuText>
        </MenuPressable>
        <MenuPressable
          onPress={() => setAvailabilityMenuVisible(!availabilityMenuVisible)}
        >
          <ListMenuIcons>
            <Icon
              name={lockType}
              type='material-community'
              size={35}
              color={lockColor}
            />
          </ListMenuIcons>
          <ListMenuText>Availability</ListMenuText>
        </MenuPressable>
        <MenuPressable onPress={() => console.log('Pressed menu')}>
          <ListMenuIcons>
            <Icon
              name='trash-can'
              type='material-community'
              size={35}
              color='#363743'
            />
          </ListMenuIcons>
          <ListMenuText>Delete list</ListMenuText>
        </MenuPressable>
      </ListsCard>
    );
  }

  if (availabilityMenuVisible) {
    return (
      <ListsCard>
        <MenuPressable
          onPress={() => setAvailabilityMenuVisible(!availabilityMenuVisible)}
        >
          <Icon name='arrow-back' type='material' size={35} color='#8B8C97' />
          <ListMenuHeaderText>Back</ListMenuHeaderText>
        </MenuPressable>
        <MenuPressable
          onPress={() => {
            setLockColor('#33B857');
            setLockType('lock-open');
            setAvailabilityMenuVisible(!availabilityMenuVisible);
            setMenuVisible(!menuVisible);
          }}
        >
          <ListMenuIcons>
            <Icon
              name='lock-open'
              type='material-community'
              size={35}
              color='#33B857'
            />
          </ListMenuIcons>
          <ListMenuText>Public</ListMenuText>
        </MenuPressable>
        <MenuPressable
          onPress={() => {
            setLockColor('#EDB525');
            setLockType('lock-open');
            setAvailabilityMenuVisible(!availabilityMenuVisible);
            setMenuVisible(!menuVisible);
          }}
        >
          <ListMenuIcons>
            <Icon
              name='lock-open'
              type='material-community'
              size={35}
              color='#EDB525'
            />
          </ListMenuIcons>
          <ListMenuText>Friends</ListMenuText>
        </MenuPressable>
        <MenuPressable
          onPress={() => {
            setLockColor('#DA532F');
            setLockType('lock');
            setAvailabilityMenuVisible(!availabilityMenuVisible);
            setMenuVisible(!menuVisible);
          }}
        >
          <ListMenuIcons>
            <Icon
              name='lock'
              type='material-community'
              size={35}
              color='#DA532F'
            />
          </ListMenuIcons>
          <ListMenuText>Private</ListMenuText>
        </MenuPressable>
      </ListsCard>
    );
  }

  return (
    <ListsCard>
      <MenuPressable onPress={() => setMenuVisible(!menuVisible)}>
        <ListMenuLock>
          <Icon
            name={lockType}
            type='material-community'
            size={20}
            color={lockColor}
          />
        </ListMenuLock>
        <ListMenuIcon>
          <Icon name='dots-three-horizontal' type='entypo' size={45} />
        </ListMenuIcon>
      </MenuPressable>
      <NavToItemsPressable
        onPress={() =>
          navigation.navigate('List items', {
            listItems: lists
          })
        }
      >
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
      </NavToItemsPressable>
    </ListsCard>
  );
};
