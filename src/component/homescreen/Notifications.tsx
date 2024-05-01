import React from 'react';
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
import {navigate, Routes} from '../../screennavigation/navigation';

export const Notifications: React.FC = () => {
  return (
    <View style={{margin: 10}}>
      <TouchableOpacity
        onPress={() => navigate({screenName: Routes.Notificationscreen})}>
        <Image
          source={Images.notification}
          style={{
            width: 30,
            height: 30,
            backgroundColor: color.blue,
            borderRadius: 6,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({});
