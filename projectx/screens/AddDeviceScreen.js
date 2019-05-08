// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet, Button } from 'react-native';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import { withNavigation } from 'react-navigation';
import LoginHeaderImage from '../components/Login/LoginHeaderImage';
import AddDeviceForm from "../components/AddDevice/AddDeviceForm";
// import Icon from 'react-native-vector-icons/FontAwesome';

// create classful component
class AddDeviceScreen extends Component {
    // title for screen
    static navigationOptions = {
        title: 'Add Device',
    };

    render() {

        return (
            // container for components
            <Container>
                <LoginHeaderImage />
                <AddDeviceForm />
            </Container>

        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(AddDeviceScreen);