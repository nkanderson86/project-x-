// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from "react-native-elements";
import { Container, Form, Item, Input, Label } from 'native-base';
import { withNavigation, NavigationActions } from 'react-navigation';
import UserSetup from '../userAuthListener';

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
        this.props.navigation.addListener('willFocus', async (route) => {
            const setState = this.setState.bind(this)
            await UserSetup(this.state.UID, setState, this.state.page, this.state.deviceId)
            // console.log("SCHEDULE", this.state.scheduleData)
            this.handleNewSchedule()
        })
        // inceptor to add userId to headers in order to make API calls as an authenticated user.  UserSetup also has an API call to retrieve all the arduinos for the account that will then be displayed to user on a table. 

    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log(prevProps.data)
    //     console.log(this.props.navigation.state.params.newSchedule)
    //     // if(prevProps.data !== this.props.navigation.state.params.newSchedule)
    // }

    handleNewSchedule() {
        // console.log( this.props.navigation.state.params)
        let schedule = this.props.navigation.state.params.newSchedule ? this.props.navigation.state.params.newSchedule : this.props.navigation.state.params.scheduleData
        console.log('new param', schedule)
        this.setState({ scheduleData: schedule })
    }

    // componentDidUpdate() {
    //     console.log(this.state.scheduleData)
    // }

    goToSetSchedule = (userObj) => {
        const { scheduleData, name, deviceId } = this.state
        const editSchedule = { scheduleData }
        const editName = { name }
        const editDeviceId = { deviceId }
        const navigateAction = NavigationActions.navigate({
            routeName: "SetSchedule",
            params: { data: userObj, editSchedule: editSchedule.scheduleData, name: editName, deviceId: editDeviceId }
        });
        // console.log("USEROBJ", this.state)

        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <ScrollView>
                <Container>
                    <Form style={styles.editDeviceContainer}>
                        <Item style={styles.editDeviceField} stackedLabel last>
                            <Label>Device ID</Label>
                            <Input value={`${this.state.deviceId}`} />
                        </Item>
                        <Item style={styles.editDeviceField} stackedLabel last>
                            <Label>Edit Device Name</Label>
                            <Input onChangeText={(text) => this.setState({ name: text })} value={this.state.name} />
                        </Item>
                    </Form>
                    <View>
                        <Button title="Edit/Set Schedule" style={styles.setScheduleButton} onPress={this.goToSetSchedule} />
                    </View>
                    <View>
                        {
                            this.state.scheduleData ? this.state.scheduleData.map(sch => {
                                return (
                                    <View>
                                        <Text>{`${sch.day}`}</Text>
                                        <Text>{`${sch.amount} cups`}</Text>
                                        <Text>{`${sch.time}`}</Text>
                                    </View>)
                            }
                            )
                                : null}
                    </View>
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

    setScheduleButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },

});