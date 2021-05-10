import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AddProduct } from '../../features/add-product/add-product/add-product.screen';

const AddProductStack = createStackNavigator();

export const AddProductNavigator = () => {
  return (
    <AddProductStack.Navigator headerMode='none'>
      <AddProductStack.Screen name='Add Product' component={AddProduct} />
    </AddProductStack.Navigator>
  );
};
