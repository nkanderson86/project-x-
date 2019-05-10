// required imports and dependencies
import React, { Component } from 'react';
import { Container } from 'native-base';
import { ScrollView } from "react-native";
import { withNavigation } from 'react-navigation';
import LoginHeaderImage from '../components/Login/LoginHeaderImage';
import SetScheduleForm from "../components/SetSchedule/SetScheduleForm";
// import Icon from 'react-native-vector-icons/FontAwesome';

// create classful component
class SetScheduleScreen extends Component {
    // title for screen
    static navigationOptions = {
        title: 'Edit Device',
    };

    render() {

        return (
            // container for components
            <Container>
                <ScrollView>
                    <LoginHeaderImage />
                    <SetScheduleForm />
                </ScrollView>

            </Container>

        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(SetScheduleScreen);