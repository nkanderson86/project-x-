// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet, Button, ScrollView } from 'react-native';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import { withNavigation } from 'react-navigation';
import LoginHeaderImage from '../components/Login/LoginHeaderImage';
import EditDeviceForm from '../components/EditDevice/EditDevice';


// import Icon from 'react-native-vector-icons/FontAwesome';

// create classful component
class EditDeviceScreen extends Component {
    // title for screen
    static navigationOptions = {
        title: 'Device Details',
    };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: props.navigation.state.params.data[0]
    //     }
    // }

    render() {

        console.log(this.props.navigation.state.params.data)
        const deviceData = this.props.navigation.state.params.data

        return (
            // container for components
            <Container>
                <ScrollView>
                    <LoginHeaderImage />
                    <EditDeviceForm />
                </ScrollView>
            </Container>

        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(EditDeviceScreen);

const styles = StyleSheet.create({
    editDeviceContainer: {
        marginTop: 20,
    },

    editDeviceField: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20
    },

    editDeviceSaveButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },
});