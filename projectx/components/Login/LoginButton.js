import React, { Component } from 'react';
import { StyleSheet, Text, Linking, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Button } from 'react-native-elements';
import { NavigationActions } from "react-navigation";

export default class LoginButton extends Component {

    goToMain = () => {
        const navigationAction = NavigationActions.navigate({
            routeName: "Main",
        });
        this.props.navigation.dispatch(navigationAction);
    }

    render() {

        return (
            <Button onPress={this.goToMain} style={styles.loginButton} title="Login"
            />
        );
    }
}

const styles = StyleSheet.create({
    loginButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },
});