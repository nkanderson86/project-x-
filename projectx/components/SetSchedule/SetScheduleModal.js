import React, { Component } from 'react';
import { Modal, Text, View, Alert, StyleSheet, Picker } from 'react-native';
import { Button, Image } from 'react-native-elements';
import LoginHeaderImage from '../Login/LoginHeaderImage';
import { Col, Row, Grid } from "react-native-easy-grid";
import API from '../../utils/API';

class AddScheduleModal extends Component {

    state = {
        modalVisible: false,
        switchValue: false,
        day: "Monday",
        amount: "0.25",
        time: "0:01"
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    setSchedule = () => {
        const { day, amount, time } = this.state
        const newSchedule = { day, amount, time }
        console.log("NEW SCHEDULE: ", newSchedule)
        this.props.addToSchedule(newSchedule);
        // API.setSchedule(newSchedule)
        //     .then(res => console.log("Schedule added"))
        //     .catch(err => console.log('SCHEDULE ERROR: ', err))
        // console.log("request sent!");

        this.setModalVisible(!this.state.modalVisible);
    }

    render() {

        return (
            <View >
                <Modal
                    animationType="fade"
                    presentationStyle="fullScreen"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View>


                        <View style={styles.inputFlex}>
                            <View style={styles.modalPickerDay}>
                                <Picker
                                    selectedValue={this.state.day}
                                    onValueChange={(dayValue, itemIndex) =>
                                        this.setState({ day: dayValue })
                                    }>
                                    <Picker.Item label="Monday" value="Monday" />
                                    <Picker.Item label="Tuesday" value="Tuesday" />
                                    <Picker.Item label="Wednesday" value="Wednesday" />
                                    <Picker.Item label="Thursday" value="Thursday" />
                                    <Picker.Item label="Friday" value="Friday" />
                                    <Picker.Item label="Saturday" value="Saturday" />
                                    <Picker.Item label="Sunday" value="Sunday" />
                                </Picker>

                            </View>
                            <View style={styles.modalPickerWaterAmount}>
                                <Picker
                                    selectedValue={this.state.amount}
                                    onValueChange={(waterAmountValue, itemIndex) =>
                                        this.setState({ amount: waterAmountValue })
                                    }>
                                    <Picker.Item label="0.25 cup" value="0.25" />
                                    <Picker.Item label="0.5 cup" value="0.5" />
                                    <Picker.Item label="1 cup" value="1" />
                                    <Picker.Item label="1.5 cups" value="1.5" />
                                    <Picker.Item label="2 cups" value="2" />
                                    <Picker.Item label="2.5 cups" value="2.5" />
                                    <Picker.Item label="3 cups" value="3" />
                                    <Picker.Item label="3.5 cups" value="3.5" />
                                    <Picker.Item label="4 cups" value="4" />
                                </Picker>
                            </View>

                            <View style={styles.modalPickerTime}>
                                <Picker
                                    selectedValue={this.state.time}
                                    onValueChange={(timeValue, itemIndex) =>
                                        this.setState({ time: timeValue })
                                    }>
                                    <Picker.Item label="00:01" value="00:01" />
                                    <Picker.Item label="01:00" value="01:00" />
                                    <Picker.Item label="02:00" value="02:00" />
                                    <Picker.Item label="03:00" value="03:00" />
                                    <Picker.Item label="04:00" value="04:00" />
                                    <Picker.Item label="05:00" value="05:00" />
                                    <Picker.Item label="06:00" value="06:00" />
                                    <Picker.Item label="07:00" value="07:00" />
                                    <Picker.Item label="08:00" value="08:00" />
                                    <Picker.Item label="09:00" value="09:00" />
                                    <Picker.Item label="10:00" value="10:00" />
                                    <Picker.Item label="11:00" value="11:00" />
                                    <Picker.Item label="12:00" value="12:00" />
                                    <Picker.Item label="13:00" value="13:00" />
                                    <Picker.Item label="14:00" value="14:00" />
                                    <Picker.Item label="14:30" value="14:30" />
                                    <Picker.Item label="15:00" value="15:00" />
                                    <Picker.Item label="16:00" value="16:00" />
                                    <Picker.Item label="17:00" value="17:00" />
                                    <Picker.Item label="18:00" value="18:00" />
                                    <Picker.Item label="19:00" value="19:00" />
                                    <Picker.Item label="20:00" value="20:00" />
                                    <Picker.Item label="21:00" value="21:00" />
                                    <Picker.Item label="22:00" value="22:00" />
                                    <Picker.Item label="23:00" value="23:00" />
                                </Picker>
                            </View>
                        </View>

                        <View style={styles.buttonsContainer}>
                            <Button title="Save" style={styles.saveModalButton} onPress={this.setSchedule} />
                            {/* <Button title="Cancel" style={styles.saveModalButton} onPress={this.setModalVisible(!this.state.modalVisible)} /> */}

                            <Button title="Cancel" style={styles.saveModalButton} onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }} />
                        </View>

                    </View>
                </Modal>

                <Button title="Set Schedule" style={styles.showModalButton} onPress={() => {
                    this.setModalVisible(true);
                }} />
            </View >
        );
    }
}
export default AddScheduleModal;

const styles = StyleSheet.create({

    modalImage: {
        marginTop: 80
    },

    showModalButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },

    inputFlex: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "stretch",
        marginTop: 100,
        marginLeft: 20,
        marginRight: 20
    },

    modalPickerDay: {
        height: 50,
        width: 80,
        marginLeft: 0,
        marginRight: 5
    },

    modalPickerWaterAmount: {
        height: 50,
        width: 100,
        marginLeft: 5,
        marginRight: 5
    },

    modalPickerTime: {
        height: 50,
        width: 80,
        marginLeft: 5,
        marginRight: 0
    },

    buttonsContainer: {
        marginTop: 250,
    },

    saveModalButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20

    },

});
        //import css grid react native easy grid
        //import , container, nested pickers and button, first row - pickers
        // second row -- button
