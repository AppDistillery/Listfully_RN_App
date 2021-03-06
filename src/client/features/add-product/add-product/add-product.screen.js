import React, { useState, useEffect, useContext } from 'react';
import { Icon } from 'react-native-elements';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { CURRENCIES } from '../../../services/CurrencyData';
import { DATA } from '../../../services/MockData';
import { PhotoContext } from '../../../services/photo/photo.context';

import {
  AddImageContainer,
  AddProductImage,
  AddProductInputContainer,
  CurrencyPicker,
  CurrencyPickerText,
  PriceAndQuantityContainer,
  PriceContainer,
  PriceTextInput,
  QuantityTextInput,
  SaveBtnContainer,
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
  TextInputWide
} from '../../global.styles';
import { KeyboardAvoid } from '../../../components/utility/keyboard-avoiding.component';
import { ConfirmationModal } from './modals/confirmation.modal';
import { SaveToListModal } from './modals/saveToList.modal';
import { CurrencyModal } from './modals/currency.modal';

export const AddProduct = ({ navigation }) => {
  const [saveToList, setSaveToList] = useState('Saved for later');
  const [saveToListModalVisible, setSaveToListModalVisible] = useState(false);
  const [currency, setCurrency] = useState('NOK');
  const [currencyModalVisible, setCurrencyModalVisible] = useState(false);
  const [confirmationModalVisible, setConfirmationModalVisible] =
    useState(false);
  const [productName, onChangeProductName] = useState(null);
  const [productLink, onChangeProductLink] = useState(null);
  const [storeName, onChangeStoreName] = useState(null);
  const [productPrice, onChangeProductPrice] = useState(null);
  const [productQuantity, onChangeProductQuantity] = useState('1');
  const [productDescription, onChangeProductDescription] = useState(null);
  const [toggleAvtiveSaveBtn, setToggleAvtiveSaveBtn] = useState(true);
  const { photoUri, checkPhoto } = useContext(PhotoContext);

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
        productPrice.length !== 0
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
    checkPhoto(null);
  };

  const saveDataAndOpenConfirmation = () => {
    /* Save functionality 
    here later...or make own function
    that runs this one? */
    setConfirmationModalVisible(true);
  };

  const resetAndRedirect = () => {
    resetFields();
    setConfirmationModalVisible(false);
    navigation.navigate('Lists');
  };

  return (
    <KeyboardAvoid>
      <SafeArea>
        <PageContainer>
          <AddImageContainer onPress={() => navigation.navigate('Camera')}>
            {photoUri ? (
              <AddProductImage source={{ uri: photoUri }} />
            ) : (
              <AddProductImage
                source={require('../../../../../assets/placeholder-image.png')}
              />
            )}
          </AddImageContainer>
          <AddProductInputContainer>
            <TextInputWide
              placeholder='Product Name (required)'
              onChangeText={onChangeProductName}
              value={productName}
            />
            <TextInputWide
              placeholder='Link to product/store'
              onChangeText={onChangeProductLink}
              value={productLink}
            />
            <TextInputWide
              placeholder='Store name'
              onChangeText={onChangeStoreName}
              value={storeName}
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
                  await saveDataAndOpenConfirmation();
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

          {/* MODALS */}

          <SaveToListModal
            visible={saveToListModalVisible}
            toggleVisible={toggleSaveToListModal}
            data={DATA}
            saveToList={saveToList}
            setSaveToList={setSaveToList}
          />

          <CurrencyModal
            visible={currencyModalVisible}
            toggleVisible={toggleCurrencyModal}
            data={CURRENCIES}
            currency={currency}
            setCurrency={setCurrency}
          />

          <ConfirmationModal
            visible={confirmationModalVisible}
            name={productName}
            list={saveToList}
            resetAndRedirect={resetAndRedirect}
          />
        </PageContainer>
      </SafeArea>
    </KeyboardAvoid>
  );
};
