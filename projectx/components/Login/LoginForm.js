import React, { Component } from 'react';
import { StyleSheet, Text, Linking, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Button } from 'react-native-elements';
import { NavigationActions } from "react-navigation";
import LoginButton from "./LoginButton"
import ForgotPasswordButton from "../Forgot/ForgotPasswordButton"
import SignupButton from "../Signup/SignupButton"


export default class LoginForm extends Component {

    render() {

        return (
            <Form style={styles.loginContainer}>
                <Item style={styles.loginField} floatingLabel last>
                    <Label>Username</Label>
                    <Input />
                </Item>
                <Item style={styles.loginField} floatingLabel last>
                    <Label>Password</Label>
                    <Input />
                </Item>
                <LoginButton navigation={this.props.navigation} />
                <ForgotPasswordButton navigation={this.props.navigation} />
                <SignupButton navigation={this.props.navigation} />
            </Form>
        );
    }
}

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