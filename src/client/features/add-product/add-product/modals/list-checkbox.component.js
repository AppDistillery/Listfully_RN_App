import React, { useState, useEffect } from 'react';
import { CheckBox } from 'react-native-elements';
import { colors } from '../../../../infrastructure/theme/colors';

export const SaveToListCheckbox = ({ item, saveToList, setSaveToList }) => {
  const [listPickerChecked, setListPickerChecked] = useState(false);

  useEffect(() => {
    if (item.name === saveToList) {
      setListPickerChecked(true);
    } else {
      setListPickerChecked(false);
    }
  }, [saveToList]);

  return (
    <CheckBox
      title={item.name}
      center
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      checked={listPickerChecked}
      checkedColor={colors.charcoal}
      onPress={() => {
        setListPickerChecked(true);
        setSaveToList(item.name);
      }}
    />
  );
};
