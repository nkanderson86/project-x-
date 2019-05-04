import React, { Component } from 'react';
import { StyleSheet, Text, Linking, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Button } from 'react-native-elements';
import { NavigationActions } from "react-navigation";

export default class CreateAccountButton extends Component {

    createAccount = () => {
        const navigationAction = NavigationActions.navigate({
            routeName: "Main",
        });
        this.props.navigation.dispatch(navigationAction);
    }

    render() {

        return (
            <Button onPress={this.createAccount} style={styles.createAccount} title="Create Account"
            />
        );
    }
}

const styles = StyleSheet.create({
    createAccount: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },
});