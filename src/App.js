import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
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
        <LoginForm />
      </View>
    );
  }
}

export default App;
