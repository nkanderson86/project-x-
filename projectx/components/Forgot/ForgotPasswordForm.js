import React, { Component } from 'react';
import { StyleSheet, Text, Linking, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Button } from 'react-native-elements';
import { NavigationActions } from "react-navigation";
import ResetPasswordButton from "./ResetPasswordButton"

export default class ForgotPasswordForm extends Component {

    render() {

        return (
            <Form style={styles.loginContainer}>
                <Item style={styles.loginField} floatingLabel last>
                    <Label>Username</Label>
                    <Input />
                </Item>
                <ResetPasswordButton navigation={this.props.navigation} />
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

});