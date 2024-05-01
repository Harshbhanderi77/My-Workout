import React, {useEffect, useState} from 'react';
import {
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
  useEffect(() => {
    LocationPermission;
  }, []);

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
      }
    } catch (error) {
      console.error('Location permission:', error);
    }
  };

  const geolocation = async () => {
    const result = await LocationPermission();
    if (result) {
      Geolocation?.getCurrentPosition(
        position => {
          // console.log(position.coords.latitude);
          console.log(position);
          setLocationlat(position);
          setLocationlog(position);
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
      );
    }
  };

  // const Fetchaddress = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${locationlat},${locationlog}&key=YOUR_GOOGLE_MAPS_API_KEY`,
  //     );
  //     const data: GeolocationResponse = await response.json();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
            marginRight: 20,
          }}
          onPress={() => {
            geolocation();
          }}>
          <Image
            source={Images.googlemaps}
            style={{
              height: 40,
              width: 40,
            }}
          />
        </TouchableOpacity>
        <Text style={{color: color.black}}>
          Lat: {locationlat?.coords.latitude + '\n'}
          Long: {locationlat?.coords.longitude}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({});
