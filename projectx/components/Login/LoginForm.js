// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';
import { NavigationActions, withNavigation } from "react-navigation";
import LoginButton from "./LoginButton"
import ForgotPasswordButton from "../Forgot/ForgotPasswordButton"
import SignupButton from "../Signup/SignupButton"

// create classful component
class LoginForm extends Component {

    render() {

        return (
            // form for user input
            <Form style={styles.loginContainer}>
                <Item style={styles.loginField} floatingLabel last>
                    <Label>Username</Label>
                    <Input />
                </Item>
                <Item style={styles.loginField} floatingLabel last>
                    <Label>Password</Label>
                    <Input />
                </Item>
                {/* button to route user, if authenticated, to dashboard, input login in component to check auth */}
                <LoginButton />
                {/* button to route user to reset password */}
                <ForgotPasswordButton title="Forgot" />
                {/* button to route user to create an account */}
                <SignupButton />
            </Form>
        );
    }
}
// export component withNavigation method which will pass props
export default withNavigation(LoginForm);

// styling
const styles = StyleSheet.create({
    loginContainer: {
        marginTop: 20,
    },

    loginField: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20
    },

    loginButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },

});