import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCSGM6IWbYLoWmpCnCfR0m_RhJjQHmKeeI',
      authDomain: 'rn-auth-4ea37.firebaseapp.com',
      databaseURL: 'https://rn-auth-4ea37.firebaseio.com',
      projectId: 'rn-auth-4ea37',
      storageBucket: 'rn-auth-4ea37.appspot.com',
      messagingSenderId: '1007661453432'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
        );
      case false:
      return <LoginForm />;
      default :
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        { this.renderContent() }
      </View>
    );
  }
}

export default App;
