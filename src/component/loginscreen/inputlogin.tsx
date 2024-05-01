import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {color} from '../../style/color';
export interface AuthInputProps {
  placeholder: string;
  setname: (name: string) => void;
  keyboardType: any;
  maxLength: number;
  errortext: string;
  autoCapitalize: any;
  secureTextEntry: any;
}

export const Inputlogin: React.FC<AuthInputProps> = ({
  placeholder,
  setname,
  keyboardType,
  maxLength,
  errortext,
  autoCapitalize,
  secureTextEntry,
}: AuthInputProps) => {
  return (
    <View
      style={{
        backgroundColor: color.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.inputview}>
        <TextInput
          // value={name}
          style={styles.inputText}
          placeholder={placeholder}
          placeholderTextColor="#8c8c8c"
          keyboardType={keyboardType}
          maxLength={maxLength}
          onChangeText={setname}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
        />
        {errortext && <Text style={{color: 'red'}}>{errortext}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputview: {
    width: '80%',
    backgroundColor: color.gray1,
    borderRadius: 12,
    // justifyContent: 'center',
    marginTop: 22,
  },
  inputText: {
    color: color.black,
    fontWeight: '500',
    fontSize: 14,
    paddingHorizontal: 22,
  },
});
