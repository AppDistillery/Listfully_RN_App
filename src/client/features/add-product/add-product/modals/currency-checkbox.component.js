import React, { useState, useEffect } from 'react';
import { CheckBox } from 'react-native-elements';
import { colors } from '../../../../infrastructure/theme/colors';

export const CurrencyCheckbox = ({ item, currency, setCurrency }) => {
  const [currencyPickerChecked, setCurrencyPickerChecked] = useState(false);

  useEffect(() => {
    if (item.code === currency) {
      setCurrencyPickerChecked(true);
    } else {
      setCurrencyPickerChecked(false);
    }
  }, [currency]);

  return (
    <CheckBox
      title={item.code}
      center
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      checked={currencyPickerChecked}
      checkedColor={colors.charcoal}
      onPress={() => {
        setCurrencyPickerChecked(true);
        setCurrency(item.code);
      }}
    />
  );
};
