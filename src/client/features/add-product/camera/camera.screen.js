import React, { useState, useEffect, useRef, useContext } from 'react';
import { Camera } from 'expo-camera';
import { InnerSnap, StyledCamera } from './camera.styles';
import { View, Text } from 'react-native';
import { Pressable } from 'react-native';
import { PhotoContext } from '../../../services/photo/photo.context';

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const { checkPhoto } = useContext(PhotoContext);
  const cameraRef = useRef();

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      checkPhoto(photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <StyledCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.back}
    >
      <Pressable onPress={() => takePicture()}>
        <InnerSnap />
      </Pressable>
    </StyledCamera>
  );
};
