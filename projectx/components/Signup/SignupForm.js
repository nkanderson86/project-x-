// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';
import CreateAccountButton from "./CreateAccountButton"
import { withNavigation } from 'react-navigation';

// create classful component
class SignupForm extends Component {

    render() {

        return (
            // form for user input
            <Form style={styles.signupContainer}>
                <Item style={styles.signupField} floatingLabel last>
                    <Label>Device ID</Label>
                    <Input />
                </Item>
                <Item style={styles.signupField} floatingLabel last>
                    <Label>Set Username</Label>
                    <Input />
                </Item>
                <Item style={styles.signupField} floatingLabel last>
                    <Label>Set Password</Label>
                    <Input />
                </Item>
                {/* button to route user, input logic to create account on component CreateAccountButton.js */}
                <CreateAccountButton />
            </Form>
        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(SignupForm);

// styling
const styles = StyleSheet.create({
    signupContainer: {
        marginTop: 20,
    },

    signupField: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20
    },

    signupButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },
});