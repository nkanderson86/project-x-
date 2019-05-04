import React, { Component } from 'react';
import { StyleSheet, Text, Linking, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Button } from 'react-native-elements';
import { NavigationActions } from "react-navigation";

export default class SignupButton extends Component {

    goToSignup = () => {
        const navigationAction = NavigationActions.navigate({
            routeName: "Signup",
        });
        this.props.navigation.dispatch(navigationAction);
    }

    render() {

        return (
            <Button onPress={this.goToSignup} style={styles.signupButton} title="Signup"
            />
        );
    }
}

const styles = StyleSheet.create({
    signupButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },
});