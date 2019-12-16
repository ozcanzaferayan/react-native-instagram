import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { RNCamera } from 'react-native-camera';

import iconSettings from '../../img/settings.png';
import iconFlash from '../../img/flash.png';
import iconFlashOff from '../../img/flash_off.png';
import iconClose from '../../img/close.png';
import iconCloseThick from '../../img/close_thick.png';

const StoryCameraScreen = () => {
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.preview}></View>
      {/* <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={({ barcodes }) => {
          console.log(barcodes);
        }}
      /> */}
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 50 }}>

        <View style={{ width: 75, height: 75,  borderRadius: 75, borderWidth: 5, backgroundColor: 'transparent', borderColor:'white',  justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ width: 60, height: 60, borderRadius: 60, backgroundColor: 'white',  }}>

            </View>
        </View>
      </View>
    </View>

    );
  };

StoryCameraScreen.navigationOptions = ({ navigation }) => ({
  headerTransparent: true,
  headerStyle: { borderBottomWidth: 0 },
  headerLeft: () => (
    <View style={{ marginLeft: 20, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.goBack(null)}>
        <Image style={{ height: 25, width: 25 }} source={iconSettings} />
      </TouchableOpacity>
    </View>
  ),
  headerTitle: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Info')}>
      <Image style={{ paddingTop: 10, height: 23, width: 23, resizeMode: 'contain' }} source={iconFlash} />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <View style={{ marginRight: 20, flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={{ marginLeft: 20, paddingTop: 10, height: 23, width: 23, resizeMode: 'contain' }} source={iconCloseThick} />
      </TouchableOpacity>
    </View>
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});
export default StoryCameraScreen;
