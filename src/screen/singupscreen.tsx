import React, {useState} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {color} from '../style/color';
import {Headinglogo} from '../component/singupscreen/headinglogo';
import {Images} from '../assets/typimg/image';
import {Loginbutton} from '../component/loginscreen/loginbutton';
import {Inputsingup} from '../component/singupscreen/inputsingup';
import {replace, Routes} from '../screennavigation/navigation';
import auth from '@react-native-firebase/auth';
import ScrollView = Animated.ScrollView;
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Singupscreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to track if password is visible

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const singinuser = async (email: string, password: string) => {
    try {
      if (!email || !password) {
        console.log('email and password');
        return;
      }
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (response) {
        replace({screenName: Routes.Home});
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //validation
  const handleSingup = async () => {
    let isValid = true;

    //name
    if (!name.trim()) {
      setNameError('Name is required ');
      isValid = false;
    } else if (name.length < 4 || name.length > 15) {
      setNameError('Name is required length');
      isValid = false;
    } else {
      setNameError('');
    }

    //email
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    } else {
      setEmailError('');
    }

    //phone
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneNumber.trim()) {
      setPhoneError('Phone number is required');
      isValid = false;
    } else if (!phoneRegex.test(phoneNumber)) {
      setPhoneError('Invalid phone number length');
      isValid = false;
    } else {
      setPhoneError('');
    }

    //password
    if (!password.trim()) {
      setPasswordError('Pasword is required');
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError('Invalid password length');
      isValid = false;
    } else {
      setPasswordError('');
    }

    // dbHelper.sinupDatabase(name, email, phoneNumber, password);
    singinuser(email, password);
    // return isValid;
    // if (isValid) {
    //   replace({screenName: Routes.Home});
    // }
    return isValid;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleLoginPress = async () => {
    // if (handleSingup()) {
    //   await AsyncStorage.setItem('singup', 'true');
    //   replace({screenName: Routes.Home});
    // } else {
    //   console.log('Singup failed');
    // }

    try {
      const isSignupSuccessful = await handleSingup();
      if (isSignupSuccessful) {
        await AsyncStorage.setItem('signup', 'true');
        replace({screenName: Routes.Home});
      } else {
        console.log('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  const singup = [
    {
      key: 0,
      keyboardType: 'default',
      placeholder: 'Enter your Name',
      onChange: setName,
      errorText: nameError,
      maxLength: 25,
    },
    {
      key: 1,
      keyboardType: 'email-address',
      placeholder: 'Enter your Email',
      onChange: setEmail,
      errorText: emailError,
      autoCapitalize: 'none',
      // value: email,
    },
    {
      key: 2,
      keyboardType: 'number-pad',
      placeholder: '+91 7985426412',
      onChange: setPhonenumber,
      errorText: phoneError,
      maxLength: 10,
    },
    {
      key: 3,
      keyboardType: 'default',
      placeholder: 'Enter your Password',
      onChange: setPassword,
      errorText: passwordError,
      autoCapitalize: 'none',
      secureTextEntry: !showPassword,
      maxLength: 8,
      // value: password,
    },
  ];

  return (
    <View
      style={{
        backgroundColor: color.white,
        flex: 1,
        justifyContent: 'center',
      }}>
      <ScrollView>
        <Image
          source={Images.loginbackground}
          style={{
            width: '100%',
            height: '40%',
            // flex: 0.3,
            resizeMode: 'cover',
            position: 'absolute',
            top: 0,
          }}
        />
        <Headinglogo />
        <View style={{marginTop: 40}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: color.black, fontSize: 24, fontWeight: '600'}}>
              Singup Screen
            </Text>
          </View>
          {singup.map(item => [
            <Inputsingup
              key={item.key}
              placeholder={item.placeholder}
              keyboardType={item.keyboardType}
              setname={item.onChange}
              errorText={item.errorText}
              maxLength={item.maxLength as number}
              autoCapitalize={item.autoCapitalize}
              secureTextEntry={item.secureTextEntry}
              // value={item.value}
            />,
          ])}
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              // position: 'relative',
              marginHorizontal: 40,
            }}>
            <Text
              style={{
                color: color.black,
              }}>
              {showPassword ? 'Hide Password' : 'Show Password'}
            </Text>
            {/*<Image*/}
            {/*  source={showPassword ? Images.hide : Images.show}*/}
            {/*  style={{*/}
            {/*    width: 20,*/}
            {/*    height: 20,*/}
            {/*    marginRight: 24,*/}
            {/*    position: 'absolute',*/}
            {/*    alignItems: 'center',*/}
            {/*    right: 30,*/}
            {/*    top: -36,*/}
            {/*  }}*/}
            {/*/>*/}
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <Loginbutton screenName={'Singin'} onPrees={handleLoginPress} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
