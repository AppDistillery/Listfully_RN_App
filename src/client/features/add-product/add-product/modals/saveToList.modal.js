import React from 'react';
import { FlatList } from 'react-native';
import { Overlay } from 'react-native-elements';
import { Btn, BtnText, TextLarge } from '../../../global.styles';
import {
  SaveToListFlatlistContainer,
  TextCenterContainer
} from '../add-product.styles';
import { SaveToListCheckbox } from './list-checkbox.component';

export const SaveToListModal = ({
  visible,
  toggleVisible,
  data,
  saveToList,
  setSaveToList
}) => {
  return (
    <Overlay isVisible={visible} onBackdropPress={toggleVisible}>
      <TextCenterContainer>
        <TextLarge>Choose currency</TextLarge>
      </TextCenterContainer>
      <SaveToListFlatlistContainer>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            {
              if (item.name === 'All') {
                return null;
              } else {
                return (
                  <SaveToListCheckbox
                    item={item}
                    saveToList={saveToList}
                    setSaveToList={setSaveToList}
                  />
                );
              }
            }
          }}
          keyExtractor={(item) => item.id}
        />
      </SaveToListFlatlistContainer>
      <Btn onPress={() => toggleVisible()}>
        <BtnText>Save</BtnText>
      </Btn>
    </Overlay>
  );
};
