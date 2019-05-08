// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from "react-native-elements";
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import { withNavigation } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome';

// create classful component
class EditDeviceForm extends Component {

    state = {
        name: this.props.navigation.state.params.data
    }

    render() {

        console.log(this.props.navigation.state.params.data)

        return (
            // container for components
            <Container>
                <Form style={styles.editDeviceContainer}>
                    <Item style={styles.editDeviceField} floatingLabel last>
                        <Label>Device ID</Label>
                        <Input />
                    </Item>
                    <Item style={styles.editDeviceField} floatingLabel last>
                        <Label>Edit Device Name</Label>
                        <Input onChangeText={(text) => this.setState({ name: text })} value={this.state.name} />
                    </Item>
                    <Item style={styles.editDeviceField} floatingLabel last>
                        <Label>Edit Schedule</Label>
                        <Input />
                    </Item>
                    <Button title="Schedule Modal" style={styles.scheduleModalButton} />
                    {/* button to route user, input logic to create account on component CreateAccountButton.js */}
                </Form>
            </Container>

        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(EditDeviceForm);

const styles = StyleSheet.create({
    editDeviceContainer: {
        marginTop: 20,
    },

    editDeviceField: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20
    },

    scheduleModalButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },

    editDeviceSaveButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },
});