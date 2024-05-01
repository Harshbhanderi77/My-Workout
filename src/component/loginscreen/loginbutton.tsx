import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color} from '../../style/color';
import {replace, Routes} from '../../screennavigation/navigation';

export interface ScreenName {
  screenName: String;
  onPrees: () => void;
}

export const Loginbutton: React.FC<ScreenName> = ({
  screenName,
  onPrees,
}: ScreenName) => {
  let text,
    text2,
    text1 = '';
  switch (screenName) {
    case 'Login':
      text = 'Login';
      text1 = 'Singin';
      text2 = "Don't have any account? ";
      break;
    case 'Singin':
      text = 'Singin';
      text1 = 'Login';
      text2 = 'You have account? ';
      break;
    case 'Home':
      text = 'Home';
    default:
      text = '';
  }

  const handalbutton = () => {
    if (screenName === 'Login') {
      replace({screenName: Routes.Singup});
    } else if (screenName === 'Singin') {
      replace({screenName: Routes.Login});
    }
  };

  return (
    <View
      style={{
        backgroundColor: color.white,
      }}>
      <TouchableOpacity
        style={{
          marginTop: 10,
          backgroundColor: '#87CEEB',
          paddingVertical: 6,
          borderRadius: 12,
          marginHorizontal: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        // onPress={() => replace({screenName: Routes.Home})}
        onPress={onPrees}>
        <Text style={styles.loginbtn}>{text}</Text>
      </TouchableOpacity>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
          marginHorizontal: 40,
          flexDirection: 'row',
        }}>
        <Text style={{color: color.black, fontSize: 14, fontWeight: '500'}}>
          {text2}
        </Text>
        <TouchableOpacity onPress={handalbutton}>
          <Text style={{color: color.blue2}}>{text1}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginbtn: {
    color: color.black,
    fontSize: 20,
    fontWeight: '600',
  },
});
