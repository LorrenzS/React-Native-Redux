import React, { Component } from 'react';
import { Platform, UIManager } from 'react-native'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    };
    const config = {
      apiKey: 'AIzaSyBSveKdiYJIqDJJ-d33m5MMKgg0-ipO6hk',
      authDomain: 'manager-6bee0.firebaseapp.com',
      databaseURL: 'https://manager-6bee0.firebaseio.com',
      projectId: 'manager-6bee0',
      storageBucket: 'manager-6bee0.appspot.com',
      messagingSenderId: '766638435524'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;