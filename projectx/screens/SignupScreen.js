// required imports and dependencies
import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import SignupForm from "../components/Signup/SignupForm"
import LoginHeaderImage from "../components/Login/LoginHeaderImage"
import { withNavigation } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome';

// create classful component
export default class SignupScreen extends Component {
    // title for screen
    static navigationOptions = {
        title: 'Signup',
    };

    render() {

        return (
            // container for components
            <Container>
                {/* icon/logo */}
                <LoginHeaderImage />
                {/* signup form component */}
                <Content>
                    <SignupForm />
                </Content>
            </Container>

        );
    }
}

// export component withNavigation method which will pass props
// export default withNavigation(SignupScreen);