import React, {useEffect, useState} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {color} from '../style/color';
import {Images} from '../assets/typimg/image';
import {Loginbutton} from '../component/loginscreen/loginbutton';
import {Headinglogo} from '../component/singupscreen/headinglogo';
import {Inputsingup} from '../component/singupscreen/inputsingup';
import {replace, Routes} from '../screennavigation/navigation';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import ScrollView = Animated.ScrollView;
import {Githubsingin} from '../component/loginscreen/Githubsingin';
import {Googlesingin} from '../component/loginscreen/Googlesingin';

export const Loginscreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult>();
  // const [code, setCode] = useState();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(
        `+91${phoneNumber}`,
      );
      console.log('confirmation ===>>', confirmation);
      setConfirm(confirmation);
      console.log('phoneNumber:', confirm);
    } catch (error) {
      console.log(error);
    }
  };

  // const confirmcode = async () => {
  //   try {
  //     await confirm?.confirm(code);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const inputArrar = [
    // {
    //   key: 0,
    //   // type: 'Name',
    //   // value: name,
    //   placeholder: 'Enter your Name',
    //   onchange: setName,
    //   errorText: nameError,
    //   keyboardType: 'default',
    //   maxLength: 30,
    // },
    {
      key: 1,
      placeholder: 'Enter your Email',
      onchange: setEmail,
      errorText: emailError,
      keyboardType: 'email-address',
      autoCapitalize: 'none',
      // value: email,
    },
    {
      key: 2,
      placeholder: '+91 7985426412',
      onchange: setPhoneNumber,
      errorText: phoneError,
      keyboardType: 'phone-pad',
      maxLength: 10,
    },
    {
      key: 3,
      placeholder: 'Enter your Password',
      onchange: setPassword,
      errorText: passwordError,
      keyboardType: 'default',
      maxLength: 8,
      secureTextEntry: !showPassword,
      autoCapitalize: 'none',
    },
  ];

  //validation
  const handleLogin = () => {
    let isValid = true;

    //names
    // if (!name.trim()) {
    //   setNameError('Name is required ');
    //   isValid = false;
    // } else if (name.length < 4 || name.length > 15) {
    //   setNameError('Name is required length');
    //   isValid = false;
    // } else {
    //   setNameError('');
    // }

    //email
    const emailRegex =
      // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError('Invalid password length');
      isValid = false;
    } else {
      setPasswordError('');
    }
    console.log('data:', isValid);

    return isValid;
    // if (isValid) {
    //   auth()
    //     .signInWithEmailAndPassword(email, password)
    //     .then(response => {
    //       if (response) {
    //         replace({screenName: Routes.Home});
    //       }
    //     })
    //     .catch(reason => {
    //       console.log(reason);
    //     });
    // }
  };

  const handleLoginPress = () => {
    const isValid = handleLogin();
    if (isValid) {
      replace({screenName: Routes.Home});
    }
  };

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
              Login Screen
            </Text>
          </View>
          {inputArrar.map(item => [
            <Inputsingup
              key={item.key}
              placeholder={item.placeholder}
              keyboardType={item.keyboardType}
              setname={item.onchange}
              errorText={item.errorText}
              maxLength={item.maxLength as number}
              autoCapitalize={item.autoCapitalize}
              secureTextEntry={item.secureTextEntry}
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
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <Loginbutton screenName={'Login'} onPrees={handleLoginPress} />
        </View>
        <Googlesingin />
        <Githubsingin />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
