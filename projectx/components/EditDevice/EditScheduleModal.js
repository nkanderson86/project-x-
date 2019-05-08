import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, StyleSheet, Picker, Switch } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';

class EditScheduleModal extends Component {

    state = {
        modalVisible: false,
        switchValue: false,
    };

    toggleSwitch = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({ switchValue: value })
        //state changes according to switch
        //which will result in re-render the text
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {

        // const element = () => (
        //     <CheckBox center title="Monday" checked={this.state.checked} value="Monday" />
        // );

        return (
            <View style={styles.editScheduleModal}>
                <Modal
                    animationType="fade"
                    presentationStyle="fullScreen"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={styles.scheduleModal}>
                        <View style={{ flexDirection: 'column' }}>

                        </View>


                        <View style={{ flexDirection: 'column' }}>
                            {/*Text to show the text according to switch condition*/}
                            <Text>{this.state.switchValue ? 'Monday' : 'No Monday'}</Text>
                            {/*Switch with value set in constructor*/}
                            {/*onValueChange will be triggered after switch condition changes*/}
                            <Switch
                                label="Monday"
                                style={{ marginTop: 30 }}
                                onValueChange={this.toggleSwitch}
                                value={this.state.switchValue}
                                selectedValue={this.state.switchValue} />
                            {console.log("Value", this.state.switchValue)
                            }
                        </View>

                        <View>
                            <Button title="Save Schedule" style={styles.showModalButton} onPress={() => {
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
export default EditScheduleModal;

const styles = StyleSheet.create({
    editScheduleModal: {
        alignItems: "center"
    },

    scheduleModal: {
        alignItems: "center",
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20,
    },

    showModalButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },

});

// //  {/* <Picker
// selectedValue={this.state.language}
// style={{ height: 50, width: 100, marginTop: 30 }}
// onValueChange={(itemValue, itemIndex) =>
//     this.setState({ language: itemValue })
// }>
// <Picker.Item label="Java" value="java" />
// <Picker.Item label="JavaScript" value="js" />
// </Picker> */}