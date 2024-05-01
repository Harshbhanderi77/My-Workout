/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Navigation} from './src/screennavigation/navigation';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
