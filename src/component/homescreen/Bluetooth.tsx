import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  NativeEventEmitter,
  NativeModules,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Images} from '../../assets/typimg/image';
import {color} from '../../style/color';
import {request} from 'react-native-permissions';
import BleManager from 'react-native-ble-manager';

const BleManagerModule = NativeModules.BleManager;
const BleManagerEmitter = new NativeEventEmitter(BleManagerModule);
export const Bluetooth: React.FC = () => {
  const peripherals = new Map();
  const [isScanning, setIsScanning] = useState(false);
  const [isBluetoothOn, setIsBluetoothOn] = useState(false);
  const [isBluetoothoff, setIsBluetoothoff] = useState(false);
  const BluetoothPermission = async () => {
    try {
      let permissionResult;
      if (Platform.OS === 'android') {
        permissionResult = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        );
      } else {
        permissionResult = await request(
          'android.permission.BLUETOOTH_CONNECT',
        );
      }
      if (permissionResult === 'granted') {
        Bluetoothwork();
      } else {
        console.log('Bluetooth access denied');
      }
    } catch (error) {
      console.error('Bluetooth permission:', error);
    }
  };

  const Bluetoothwork = async () => {
    try {
      if (isBluetoothOn) {
        // await BleManager.disableBluetooth();
      } else {
        await BleManager.enableBluetooth();
      }
      setIsBluetoothOn(!isBluetoothOn);
    } catch (error) {
      console.error('Error Bluetooth:', error);
    }
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 10,
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: color.blue,
            width: 60,
            height: 60,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={BluetoothPermission}>
          <Image
            source={Images.bluetooth}
            style={{
              height: 40,
              width: 40,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({});
