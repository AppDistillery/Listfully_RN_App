import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Icon, Overlay } from 'react-native-elements';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { CURRENCIES } from '../../../services/CurrencyData';
import { DATA } from '../../../services/MockData';

import {
  AddImageContainer,
  AddProductImage,
  AddProductInputContainer,
  SaveToListFlatlistContainer,
  CurrencyFlatlistContainer,
  CurrencyPicker,
  CurrencyPickerText,
  PriceAndQuantityContainer,
  PriceContainer,
  PriceTextInput,
  QuantityTextInput,
  SaveBtnContainer,
  TextCenterContainer,
  SaveToListPicker,
  SaveToListPickerText,
  QuantityContainer,
  QuantityText
} from './add-product.styles';
import {
  Btn,
  BtnDisabled,
  BtnText,
  PageContainer,
  SpacerFlex1,
  TextInputWide,
  TextLarge
} from '../../global.styles';
import { KeyboardAvoid } from '../../../components/utility/keyboard-avoiding.component';
import { CurrencyCheckbox } from './currency-checkbox.component';
import { SaveToListCheckbox } from './list-checkbox.component';

export const AddProduct = ({ navigation }) => {
  const [saveToList, setSaveToList] = useState('Saved for later');
  const [saveToListModalVisible, setSaveToListModalVisible] = useState(false);
  const [currency, setCurrency] = useState('NOK');
  const [currencyModalVisible, setCurrencyModalVisible] = useState(false);
  const [confirmationModalVisible, setConfirmationModalVisible] = useState(
    false
  );
  const [productName, onChangeProductName] = useState(null);
  const [productLink, onChangeProductLink] = useState(null);
  const [productPrice, onChangeProductPrice] = useState(null);
  const [productQuantity, onChangeProductQuantity] = useState('1');
  const [productDescription, onChangeProductDescription] = useState(null);
  const [toggleAvtiveSaveBtn, setToggleAvtiveSaveBtn] = useState(true);

  const toggleCurrencyModal = () => {
    setCurrencyModalVisible(!currencyModalVisible);
  };

  const toggleSaveToListModal = () => {
    setSaveToListModalVisible(!saveToListModalVisible);
  };

  useEffect(() => {
    const activeSaveItemBtn = () => {
      if (
        productName !== null &&
        productName.length !== 0 &&
        productPrice !== null &&
        productPrice.length !== 0 &&
        productLink !== null &&
        productLink.length !== 0
      ) {
        setToggleAvtiveSaveBtn(false);
      } else {
        setToggleAvtiveSaveBtn(true);
      }
    };
    activeSaveItemBtn();
  }, [productName, productPrice, productLink]);

  const resetFields = () => {
    setSaveToList('Saved for later');
    setCurrency('NOK');
    onChangeProductName(null);
    onChangeProductLink(null);
    onChangeProductPrice(null);
    onChangeProductQuantity('1');
    onChangeProductDescription(null);
    setToggleAvtiveSaveBtn(true);
  };

  const saveDataAndReset = () => {
    /* Save functionality 
    here later...or make own function
    that runs this one? */
    setConfirmationModalVisible(true);
    setTimeout(() => {
      setConfirmationModalVisible(false);
      resetFields();
      navigation.navigate('Lists');
    }, 2000);
  };

  return (
    <KeyboardAvoid>
      <SafeArea>
        <PageContainer>
          <AddImageContainer>
            <AddProductImage
              source={require('../../../../../assets/placeholder-image.png')}
            />
          </AddImageContainer>
          <AddProductInputContainer>
            <TextInputWide
              placeholder='Product Name (required)'
              onChangeText={onChangeProductName}
              value={productName}
            />
            <TextInputWide
              placeholder='Product Link (required)'
              onChangeText={onChangeProductLink}
              value={productLink}
            />
            <SaveToListPicker onPress={() => toggleSaveToListModal()}>
              <SaveToListPickerText>{saveToList}</SaveToListPickerText>
            </SaveToListPicker>
            <PriceAndQuantityContainer>
              <PriceContainer>
                <PriceTextInput
                  placeholder='Price (required)'
                  keyboardType='numeric'
                  onChangeText={onChangeProductPrice}
                  value={productPrice}
                />
                <CurrencyPicker onPress={() => toggleCurrencyModal()}>
                  <CurrencyPickerText>{currency}</CurrencyPickerText>
                </CurrencyPicker>
              </PriceContainer>
              <SpacerFlex1 />
              <QuantityContainer>
                <QuantityText>Quantity:</QuantityText>
                <QuantityTextInput
                  keyboardType='numeric'
                  onChangeText={onChangeProductQuantity}
                  value={productQuantity}
                />
              </QuantityContainer>
            </PriceAndQuantityContainer>
            <TextInputWide
              placeholder='Description'
              multilines
              onChangeText={onChangeProductDescription}
              value={productDescription}
            />
          </AddProductInputContainer>
          <SaveBtnContainer>
            {!toggleAvtiveSaveBtn ? (
              <Btn
                onPress={async () => {
                  await saveDataAndReset();
                }}
              >
                <Icon
                  name='save-alt'
                  type='material'
                  size={20}
                  color='#FAFAFC'
                />
                <BtnText>SAVE ITEM</BtnText>
              </Btn>
            ) : (
              <BtnDisabled>
                <Icon
                  name='save-alt'
                  type='material'
                  size={20}
                  color='#FAFAFC'
                />
                <BtnText>SAVE ITEM</BtnText>
              </BtnDisabled>
            )}
          </SaveBtnContainer>

          {/* Save to list modal start */}
          <Overlay
            isVisible={saveToListModalVisible}
            onBackdropPress={toggleSaveToListModal}
          >
            <TextCenterContainer>
              <TextLarge>Choose currency</TextLarge>
            </TextCenterContainer>
            <SaveToListFlatlistContainer>
              <FlatList
                data={DATA}
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
            <Btn onPress={() => toggleSaveToListModal()}>
              <BtnText>Save</BtnText>
            </Btn>
          </Overlay>
          {/* Save to list modal end */}

          {/* Currency modal start */}
          <Overlay
            isVisible={currencyModalVisible}
            onBackdropPress={toggleCurrencyModal}
          >
            <TextCenterContainer>
              <TextLarge>Choose currency</TextLarge>
            </TextCenterContainer>
            <CurrencyFlatlistContainer>
              <FlatList
                data={CURRENCIES}
                renderItem={({ item }) => {
                  return (
                    <CurrencyCheckbox
                      item={item}
                      currency={currency}
                      setCurrency={setCurrency}
                    />
                  );
                }}
                keyExtractor={(item) => item.code}
              />
            </CurrencyFlatlistContainer>
            <Btn onPress={() => toggleCurrencyModal()}>
              <BtnText>Save</BtnText>
            </Btn>
          </Overlay>
          {/* Currency modal end */}

          {/* Confirmation modal start */}
          <Overlay isVisible={confirmationModalVisible}>
            <TextCenterContainer>
              <TextLarge>Product: {productName}</TextLarge>
              <TextLarge>Saved to: {saveToList}</TextLarge>
            </TextCenterContainer>
          </Overlay>
          {/* Confirmation modal end */}
        </PageContainer>
      </SafeArea>
    </KeyboardAvoid>
  );
};
