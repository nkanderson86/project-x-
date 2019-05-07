// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet, Button } from 'react-native';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import { withNavigation } from 'react-navigation';
import LoginHeaderImage from '../components/Login/LoginHeaderImage';
// import Icon from 'react-native-vector-icons/FontAwesome';

// create classful component
class EditDeviceScreen extends Component {
    // title for screen
    static navigationOptions = {
        title: 'Edit Device',
    };

    constructor(props) {
        super(props);
        this.state = {
            name: props.navigation.state.params.data[0]
        }
    }

    render() {

        console.log(this.props.navigation.state.params.data)
        const deviceData = this.props.navigation.state.params.data

        return (
            // container for components
            <Container>
                {/* devices acordian element, could inject statuses and add new device? */}
                <LoginHeaderImage />
                <Form style={styles.signupContainer}>
                    <Item style={styles.signupField} floatingLabel last>
                        <Label>Device ID</Label>
                        <Input value={this} />
                    </Item>
                    <Item style={styles.signupField} floatingLabel last>
                        <Label>Device Name</Label>
                        <Input onChangeText={(text) => this.setState({ name: text })} value={this.state.name} />
                    </Item>
                    <Item style={styles.signupField} floatingLabel last>
                        <Label>Set Password</Label>
                        <Input />
                    </Item>
                    {/* button to route user, input logic to create account on component CreateAccountButton.js */}
                </Form>
            </Container>

        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(EditDeviceScreen);

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