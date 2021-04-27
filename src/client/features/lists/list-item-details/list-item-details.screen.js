import React from 'react';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { ListItemDetailsCard } from './list-item-details-card.component';
import { ListPagesContainer } from '../../global.styles';

export const ListItemDetailsScreen = ({ route }) => {
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
          <ListItemDetailsCard details={route.params.listItemDetails} />
        </ListPagesContainer>
      </SafeArea>
    </>
  );
};
