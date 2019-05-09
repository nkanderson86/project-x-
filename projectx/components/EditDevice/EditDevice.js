// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from "react-native-elements";
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import { withNavigation, NavigationActions } from 'react-navigation';
import UserSetup from '../userAuthListener';
import LoginHeaderImage from "../Login/LoginHeaderImage";
import SetScheduleModal from "../SetSchedule/SetScheduleModal"
import ViewSchedule from "../SetSchedule/ViewSchedule"
// import Icon from 'react-native-vector-icons/FontAwesome';

// create classful component
class EditDeviceForm extends Component {

    state = {
        name: this.props.navigation.state.params.name,
        deviceId: this.props.navigation.state.params.deviceId,
        UID: this.props.navigation.state.params.UID,
        data: this.props.navigation.state.params.data,
        page: "editDevice",
        scheduleData: []
    }

    componentDidMount() {
        // inceptor to add userId to headers in order to make API calls as an authenticated user.  UserSetup also has an API call to retrieve all the arduinos for the account that will then be displayed to user on a table. 
        const setState = this.setState.bind(this)
        UserSetup(this.state.UID, setState, this.state.page, this.state.deviceId)
        console.log("SCHEDULE", this.state.scheduleData)
        console.log("DAY", this.state.scheduleData)
    }

    goToSetSchedule = (userObj) => {
        const navigateAction = NavigationActions.navigate({
            routeName: "SetSchedule",
            params: { data: userObj }
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <ScrollView>
                <Container>

                    <Form style={styles.editDeviceContainer}>
                        <Item style={styles.editDeviceField} stackedLabel last>
                            <Label>Device ID</Label>
                            <Text>{this.state.deviceId}</Text>
                        </Item>
                        <Item style={styles.editDeviceField} stackedLabel last>
                            <Label>Edit Device Name</Label>
                            <Input onChangeText={(text) => this.setState({ name: text })} value={this.state.name} />
                        </Item>
                    </Form>
                    <View style={styles.addScheduleModal}>
                        <Button title="Edit/Set Schedule" onPress={this.goToSetSchedule} />
                    </View>
                    <View>
                        {this.state.scheduleData.map(sch => {
                            return (
                                <View>
                                    <Text>{`${sch.day}`}</Text>
                                    <Text>{`${sch.amount} cups`}</Text>
                                    <Text>{`${sch.time}`}</Text>
                                </View>)
                        }
                        )}
                    </View>

                    {/* <Form style={styles.editDeviceContainer}>
                    <Item style={styles.editDeviceField} stackedLabel last>
                        <Label>Show Schedule</Label>
                        <Text>{this.state.scheduleData}</Text>
                    </Item>
                </Form> */}
                </Container>
            </ScrollView>

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

    editScheduleButton: {
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