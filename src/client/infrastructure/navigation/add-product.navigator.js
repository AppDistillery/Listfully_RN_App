import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AddProduct } from '../../features/add-product/add-product/add-product.screen';
import { CameraScreen } from '../../features/add-product/camera/camera.screen';
import { PhotoContextProvider } from '../../services/photo/photo.context';

const AddProductStack = createStackNavigator();

export const AddProductNavigator = () => {
  return (
    <PhotoContextProvider>
      <AddProductStack.Navigator headerMode='none'>
        <AddProductStack.Screen name='Add Product' component={AddProduct} />
        <AddProductStack.Screen name='Camera' component={CameraScreen} />
      </AddProductStack.Navigator>
    </PhotoContextProvider>
  );
};
