// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, Form, Item, Input, Label } from 'native-base';
import { withNavigation } from 'react-navigation';
import AddScheduleModal from "./SetScheduleModal"
import ViewSchedule from "./ViewSchedule"


// import Icon from 'react-native-vector-icons/FontAwesome';

// create classful component
class SetScheduleForm extends Component {
    // title for screen
    static navigationOptions = {
        title: 'Edit Device',
    };

    state = {
        schedule: []
    }

    componentDidMount() {

    }

    addSchedule = (newSchedule) => {
        let addedSchedule = this.state.schedule.map(a => a)
        addedSchedule.push(newSchedule)
        this.setState({
            schedule: addedSchedule
        })
    }

    handleDelete = (index) => {
        console.log("INDEX:", index);
        let schedule = this.state.schedule
        schedule.splice(index, 1);
        this.setState({
            schedule: schedule
        });
    }

    // saveSchedule = () => {
    //     let schedule = {
    //         piDevice: {
    //             arduinos: 
    //         },
    //     }
    //     API.registerUser(schedule)
    //         .then(res => console.log("Schedule added"))
    //         .catch(err => console.log('SCHEDULE ADD ERROR: ', err))
    //     console.log("request sent!")
    // }

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
                    {this.state.schedule.map((a, i) => <ViewSchedule handleDelete={this.handleDelete} schedule={a} key={i} data_id={i} />)}
                </View>

                <View>
                    <Button title="Save Schedule" style={styles.saveScheduleButton} onPress={this.saveSchedule} />
                </View>
            </Container >

        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(SetScheduleForm);

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

    saveScheduleButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },
});