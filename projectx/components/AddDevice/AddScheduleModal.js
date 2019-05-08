import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, StyleSheet, CheckBox, Picker } from 'react-native';
import { Button } from 'react-native-elements';

class AddScheduleModal extends Component {

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {

        // const element = () => (
        //     <CheckBox center title="Monday" checked={this.state.checked} value="Monday" />
        // );

        return (
            <View style={styles.addScheduleModal}>
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
                            <View style={{ flexDirection: 'row' }}>
                                <CheckBox center title="Monday" checked={this.state.checked}
                                    onClick={() => this.setState({ checked: !this.state.checked })} />
                            </View>

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
export default AddScheduleModal;

const styles = StyleSheet.create({
    addScheduleModal: {
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