// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';
import CreateAccountButton from "./CreateAccountButton"
import { withNavigation } from 'react-navigation';

// create classful component
class SignupForm extends Component {

    state = {
        username: '',
        password: '',
        deviceId: ''

    }

    generateDeviceId = () => {
        let id = Math.floor(Math.random() * (10000) + 1000)
        console.log("ID " + id)
        this.setState({ deviceId: id })
    }

    componentDidMount = () => {
        this.generateDeviceId();
        // console.log("working" + this.state.deviceId)
    }

    componentDidUpdate = () => {
        console.log(this.state)
    }

    render() {

        return (
            // form for user input
            <Form style={styles.signupContainer}>
                <Item style={styles.signupField} floatingLabel last>
                    <Label>Device ID</Label>
                    <Text> {this.id} </Text>
                </Item>
                <Item style={styles.signupField} floatingLabel last>
                    <Label>Set Username</Label>
                    <Input onChangeText={(value) => this.setState({ username: value })} />
                </Item>
                <Item style={styles.signupField} floatingLabel last>
                    <Label>Set Password</Label>
                    <Input secureTextEntry={true} onChangeText={(value) => this.setState({ password: value })} />
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