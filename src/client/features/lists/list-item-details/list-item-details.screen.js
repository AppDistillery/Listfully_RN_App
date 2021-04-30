import React from 'react';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { ListItemDetailsCard } from './list-item-details-card.component';
import { ListPagesContainer } from '../../global.styles';
import { BackBtn } from '../../../components/utility/back-btn.component';

export const ListItemDetailsScreen = ({ navigation, route }) => {
  const {
    url,
    name,
    price,
    quantity,
    external_image
  } = route.params.listItemDetails;
  return (
    <>
      <SafeArea>
        <ListPagesContainer>
          <BackBtn navigate={navigation} />
          <ListItemDetailsCard details={route.params.listItemDetails} />
        </ListPagesContainer>
      </SafeArea>
    </>
  );
};
