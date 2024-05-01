import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Splashscreen} from '../screen/splashscreen';
import {Loginscreen} from '../screen/loginscreen';
import {
  CommonActions,
  createNavigationContainerRef,
  NavigationContainer,
  StackActions,
} from '@react-navigation/native';
import {Singupscreen} from '../screen/singupscreen';
import {Homescreen} from '../screen/homescreen';
import {Contectscreen} from '../screen/Contectscreen';
import {Audioplay} from '../component/homescreen/Audioplay';
import {Notificationscreen} from '../screen/Notificationscreen';

export type StackParamsList = {
  Splashscreen: undefined;
  Loginscreen: undefined;
  Singupscreen: undefined;
  Homescreen: undefined;
  Contectscreen: undefined;
  Audioplay: undefined;
  Notificationscreen: undefined;
};

const navigationRef = createNavigationContainerRef<StackParamsList>();

const RootStack = createStackNavigator();

export enum Routes {
  Splash = 'Splashscreen',
  Login = 'Loginscreen',
  Singup = 'Singupscreen',
  Home = 'Homescreen',
  Contect = 'Contectscreen',
  Audioplay = 'Audioplay',
  Notificationscreen = 'Notificationscreen',
}

interface NavigationProps {
  screenName: Routes;
  params?: any;
}

export function navigate({screenName, params}: NavigationProps) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screenName, params);
  }
}

export function replace({screenName, params}: NavigationProps) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch({
      ...StackActions.replace(screenName, params),
    });
  }
}

export function reset({screenName, params}: NavigationProps) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: screenName, params}],
      }),
    );
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    if (navigationRef.canGoBack()) {
      navigationRef.goBack();
    }
  }
}

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={Routes.Splash}>
        <RootStack.Screen name="Splashscreen" component={Splashscreen} />
        <RootStack.Screen name="Loginscreen" component={Loginscreen} />
        <RootStack.Screen name="Singupscreen" component={Singupscreen} />
        <RootStack.Screen name="Homescreen" component={Homescreen} />
        <RootStack.Screen name="Contectscreen" component={Contectscreen} />
        <RootStack.Screen name="Audioplay" component={Audioplay} />
        <RootStack.Screen
          name="Notificationscreen"
          component={Notificationscreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
