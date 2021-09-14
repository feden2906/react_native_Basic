import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Pressable, TouchableHighlight } from 'react-native';
import { Camera } from "expo-camera";
import * as MediaLibrary from 'expo-media-library';

const CameraAndroid = () => {
  const [hasPermission, setPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const { granted: cameraStatus } = await Camera.requestPermissionsAsync();
  //     const { granted: mediaStatus } = await MediaLibrary.requestPermissionsAsync();
  //     setPermission(cameraStatus && mediaStatus);
  //   })();
  // }, [])

  if (hasPermission === null) {
    return <View/>;
  }
  if (hasPermission === false) {
    return <Text>no access to camera</Text>;
  }

  async function takePicture() {
    if (hasPermission) {
      const picture = await camera.takePictureAsync(null);
      await MediaLibrary.saveToLibraryAsync(picture.uri);
    }
  }

  const toggleCamera = () => {
    type
        ? setType(Camera.Constants.Type.back)
        : setType(Camera.Constants.Type.front)
  }

  return (
      <View style={styles.cameraContainer}>
        <Camera style={styles.fixedRatio} type={type} ref={(r) => setCamera(r)}/>

        <Button style={styles.button} title={'take picture'} onPress={takePicture}/>
        <Button title={type ? 'choose back camera' : 'choose front camera'} onPress={toggleCamera}/>
      </View>
  )

};
export default CameraAndroid;

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1
  },
  fixedRatio: {
    flex: 1,
    width: '100%',
    aspectRatio: 3 / 4
  },
});
