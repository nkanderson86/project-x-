// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, Form, Item, Input, Label } from 'native-base';
import { withNavigation, NavigationActions } from 'react-navigation';
import AddScheduleModal from "./SetScheduleModal"
import ViewSchedule from "./ViewSchedule"


// import Icon from 'react-native-vector-icons/FontAwesome';

// create classful component
class SetScheduleForm extends Component {
    // title for screen
    static navigationOptions = {
        title: 'Edit Device'
    };

    state = {

        schedule: this.props.navigation.state.params.editSchedule.map(element => {
            return { amount: element.amount, day: element.day, time: element.time }
        }),
        editSchedule: this.props.navigation.state.params.editSchedule,
        name: this.props.navigation.state.params.name,
        deviceId: this.props.navigation.state.params.deviceId,
    }

    componentDidMount() {
        console.log("SCHEDULE", this.state.schedule)
        console.log("Name", this.state.name)
        console.log("DeviceID", this.state.deviceId)
    }

    addToSchedule = (newSchedule) => {
        let addedSchedule = this.state.schedule.map(a => a)
        console.log("Added schedule", addedSchedule)
        addedSchedule.push(newSchedule)
        console.log("Added after push", addedSchedule)
        this.setState({
            schedule: addedSchedule
        })
    }

    componentDidUpdate() {
        console.log("COMBINED SCHEDULE", this.state.schedule)
    }

    handleDelete = (index) => {
        console.log("INDEX:", index);
        let schedule = this.state.schedule
        schedule.splice(index, 1);
        this.setState({
            schedule: schedule
        });
        console.log("After Delete", this.state.schedule)
    }

    saveSchedule = () => {
        const newSchedule = this.state.schedule
        console.log("AFTER ADDING NEW SHIT", newSchedule)
        const navigateAction = NavigationActions.navigate({
            routeName: "EditDevice",
            params: { newSchedule: newSchedule }
        });
        // this.props.navigation.dispatch(navigateAction);
        // this.props.parentSaveSchedule(newSchedule)
        // const navigateAction = NavigationActions.navigate({
        //     routeName: "EditDevice",
        // });
        // console.log("USEROBJ", this.state)
        this.props.navigation.dispatch(navigateAction);
    }

    render() {

        return (
            // container for components
            <Container>
                <Form style={styles.addDeviceContainer}>
                    <Item style={styles.addDeviceField} stackedLabel last>
                        <Label>Device ID</Label>
                        <Input value={this.state.deviceId} />
                    </Item>
                    <Item style={styles.addDeviceField} stackedLabel last>
                        <Label>Device Name</Label>
                        <Input value={this.state.name} />
                    </Item>
                    {/* button to route user, input logic to create account on component CreateAccountButton.js */}
                </Form>
                <View style={styles.addScheduleModal}>
                    <AddScheduleModal addToSchedule={this.addToSchedule} />
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