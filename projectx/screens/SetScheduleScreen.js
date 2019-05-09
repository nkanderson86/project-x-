// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet, Button, Text } from 'react-native';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import { withNavigation } from 'react-navigation';
import LoginHeaderImage from '../components/Login/LoginHeaderImage';
import SetScheduleForm from "../components/SetSchedule/SetScheduleForm";
// import Icon from 'react-native-vector-icons/FontAwesome';

// create classful component
class SetScheduleScreen extends Component {
    // title for screen
    static navigationOptions = {
        title: 'Edit / Set Schedule',
    };

    render() {

        return (
            // container for components
            <Container>
                <LoginHeaderImage />
                <SetScheduleForm />
            </Container>

        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(SetScheduleScreen);