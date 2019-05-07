// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import { withNavigation } from 'react-navigation';
import AddScheduleModal from "../AddDevice/AddScheduleModal"

// import Icon from 'react-native-vector-icons/FontAwesome';

// create classful component
class AddDeviceForm extends Component {
    // title for screen
    static navigationOptions = {
        title: 'Add Device',
    };

    render() {

        return (
            // container for components
            <Container>
                <Form style={styles.addDeviceContainer}>
                    <Item style={styles.addDeviceField} floatingLabel last>
                        <Label>Device ID</Label>
                        <Input />
                    </Item>
                    <Item style={styles.addDeviceField} floatingLabel last>
                        <Label>Device Name</Label>
                        <Input />
                    </Item>
                    {/* button to route user, input logic to create account on component CreateAccountButton.js */}
                </Form>
                <View>
                    <AddScheduleModal />
                </View>
            </Container >

        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(AddDeviceForm);

const styles = StyleSheet.create({
    addDeviceContainer: {
        marginTop: 20,
    },

    addDeviceField: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20
    },

    scheduleModalButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },

    addDeviceSaveButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },
});