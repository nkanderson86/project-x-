// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import { withNavigation } from 'react-navigation';
import AddScheduleModal from "./AddScheduleModal"
import ViewSchedule from "../AddDevice/ViewSchedule"

// import Icon from 'react-native-vector-icons/FontAwesome';

// create classful component
class AddDeviceForm extends Component {
    // title for screen
    static navigationOptions = {
        title: 'Add Device',
    };

    state = {
        schedule: []
    }

    addSchedule = (newSchedule) => {
        let schedule2 = this.state.schedule.map(a => a)
        schedule2.push(newSchedule)
        this.setState({
            schedule: schedule2
        })
    }

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
                <View style={styles.addScheduleModal}>
                    <AddScheduleModal addToSchedule={this.addSchedule} />
                </View>

                <View>
                    {this.state.schedule.map((a, i) => <ViewSchedule schedule={a} key={i} />)}
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

    addScheduleModal: {
        alignContent: "center"
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