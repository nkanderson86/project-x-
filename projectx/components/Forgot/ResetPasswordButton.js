import React, { Component } from 'react';
import { StyleSheet, Text, Linking, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Button } from 'react-native-elements';
import { NavigationActions } from "react-navigation";

export default class ResetPasswordButton extends Component {

    resetPassword = () => {
        const navigationAction = NavigationActions.navigate({
            routeName: "Main",
        });
        this.props.navigation.dispatch(navigationAction);
    }

    render() {

        return (
            <Button onPress={this.resetPassword} style={styles.resetPassword} title="Reset password"
            />
        );
    }
}

const styles = StyleSheet.create({
    resetPassword: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },
});