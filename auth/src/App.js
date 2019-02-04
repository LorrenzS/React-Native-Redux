import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp(
        {
            apiKey: 'AIzaSyDOxMAD_xQBxM0qV9VOalv7NrpGN3gJ18I',
            authDomain: 'authentication-b006b.firebaseapp.com',
            databaseURL: 'https://authentication-b006b.firebaseio.com',
            projectId: 'authentication-b006b',
            storageBucket: 'authentication-b006b.appspot.com',
            messagingSenderId: '739969844435'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false})
            }
        });
    };

    renderContent() {
        switch(this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size={"large"}/>;
        }
    };

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    };
};

export default App;