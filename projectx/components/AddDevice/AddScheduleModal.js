import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';
import { StyleSheet, Button } from 'react-native';

class AddScheduleModal extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ marginTop: 22 }}>
                <Modal
                    animationType="fade"
                    presentationStyle="fullScreen"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 100, marginLeft: 20 }}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Save Schedule</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
export default AddScheduleModal;

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