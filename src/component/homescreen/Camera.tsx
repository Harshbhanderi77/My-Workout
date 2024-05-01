import React, {useState} from 'react';
import {
  Image,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Images} from '../../assets/typimg/image';
import {color} from '../../style/color';
import {request} from 'react-native-permissions';
import {launchCamera} from 'react-native-image-picker';
import {Asset} from 'react-native-image-picker/src/types';

export const Camera: React.FC = () => {
  const [selectImage, setSelectImage] = useState<Asset[]>();
  const cameraPermission = async () => {
    try {
      let permissionResult;
      if (Platform.OS === 'android') {
        permissionResult = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
      } else {
        permissionResult = await request('android.permission.CAMERA');
      }
      if (permissionResult === 'granted') {
        return true;
      } else {
        console.log('Camera access denied');
      }
    } catch (error) {
      console.error('Camera permission:', error);
    }
  };

  const opencamera = async () => {
    const result = cameraPermission();
    await launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
      },
      response => {
        if (!response.didCancel) {
          if (response.assets) {
            setSelectImage(response.assets);
            console.log('response ==>>', response);
          }
        }
      },
    );
    console.log(result);
  };

  return (
    <View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
        <TouchableOpacity
          style={{
            backgroundColor: color.blue,
            width: 60,
            height: 60,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 40,
          }}
          onPress={() => opencamera()}>
          <Image
            source={Images.camera}
            style={{
              height: 40,
              width: 40,
            }}
          />
        </TouchableOpacity>
        <View style={{marginTop: 20}}>
          <Image
            height={100}
            width={100}
            source={{uri: selectImage ? selectImage[0]?.uri : ''}}
            style={{borderRadius: 20}}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({});
