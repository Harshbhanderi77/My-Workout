import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {color} from '../../style/color';

export interface AuthInputProps {
  keyboardType: any;
  placeholder: string;
  setname: (name: string) => void;
  maxLength: number;
  errorText: string;
  autoCapitalize: any;
  secureTextEntry: any;
  // value: string | undefined;
}

export const Inputsingup: React.FC<AuthInputProps> = ({
  placeholder,
  keyboardType,
  setname,
  maxLength,
  errorText,
  autoCapitalize,
  secureTextEntry,
  // value,
}) => {
  return (
    <View
      style={{
        backgroundColor: color.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{width: '80%'}}>
        <View style={styles.inputview}>
          <TextInput
            // value={value}
            placeholder={placeholder}
            placeholderTextColor="#8c8c8c"
            keyboardType={keyboardType}
            onChangeText={setname}
            maxLength={maxLength}
            style={styles.inputsingup}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
          />
        </View>
        <View style={{alignItems: 'flex-end'}}>
          {errorText && <Text style={{color: color.red}}>{errorText}</Text>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputview: {
    backgroundColor: color.gray1,
    borderRadius: 14,
    // justifyContent: 'center',
    marginTop: 20,
  },
  inputsingup: {
    color: color.black,
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 22,
  },
});
