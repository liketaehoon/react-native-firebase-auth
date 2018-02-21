import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillAmount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCSGM6IWbYLoWmpCnCfR0m_RhJjQHmKeeI',
      authDomain: 'rn-auth-4ea37.firebaseapp.com',
      databaseURL: 'https://rn-auth-4ea37.firebaseio.com',
      projectId: 'rn-auth-4ea37',
      storageBucket: 'rn-auth-4ea37.appspot.com',
      messagingSenderId: '1007661453432'
    });
  }
  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <Text>An App</Text>
      </View>
    );
  }
}

export default App;
