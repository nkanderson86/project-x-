import React, { Component } from 'react';
import { StyleSheet, Text, Linking, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Button } from 'react-native-elements';
import { NavigationActions } from "react-navigation";

export default class ForgotPasswordButton extends Component {

    goToForgot = () => {
        const navigationAction = NavigationActions.navigate({
            routeName: "Forgot",
        });
        this.props.navigation.dispatch(navigationAction);
    }

    render() {

        return (
            <Button onPress={this.goToForgot} style={styles.forgotPasswordButton} title="Forgot password"
            />
        );
    }
}

const styles = StyleSheet.create({
    forgotPasswordButton: {
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20
    },
});