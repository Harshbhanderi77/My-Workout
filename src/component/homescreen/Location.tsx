import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
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
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';

export const Location: React.FC = () => {
  const [locationlat, setLocationlat] = useState<GeolocationResponse>();
  const [locationlog, setLocationlog] = useState<GeolocationResponse>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLocation();
    const intervalId = setInterval(getLocation, 40000);
    return () => clearInterval(intervalId);
  }, []);

  const getLocation = async () => {
    setLoading(true);
    const result = await LocationPermission();
    if (result) {
      Geolocation.getCurrentPosition(
        position => {
          setLocationlat(position);
          setLocationlog(position);
          setLoading(false);
        },
        error => {
          console.log(error.code, error.message);
          setLoading(false);
        },
        {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
      );
    } else {
      setLoading(false);
    }
  };

  const LocationPermission = async () => {
    try {
      let permissionResult;
      if (Platform.OS === 'android') {
        permissionResult = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
      } else {
        permissionResult = await request(
          'android.permission.ACCESS_FINE_LOCATION',
        );
      }
      if (permissionResult === 'granted') {
        return true;
      } else {
        console.log('Location access denied');
        return false;
      }
    } catch (error) {
      console.error('Location permission:', error);
      return false;
    }
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 10,
          marginTop: 0,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: color.blue,
            width: 60,
            height: 60,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 20,
          }}
          onPress={getLocation}>
          <Image
            source={Images.googlemaps}
            style={{
              height: 40,
              width: 40,
            }}
          />
        </TouchableOpacity>
        {loading ? (
          <ActivityIndicator color={color.black} size="small" />
        ) : (
          <Text style={{color: color.black}}>
            Lat: {locationlat?.coords.latitude + '\n'}
            Long: {locationlat?.coords.longitude}
          </Text>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({});
