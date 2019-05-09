import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native"

class ViewSchedule extends Component {

    render() {
        return (
            <View>
                <Text style={styles.scheduleText}>{this.props.schedule.day}   |  {this.props.schedule.time}   |   {this.props.schedule.amount} cups</Text>
            </View>

        )
    }
}

export default ViewSchedule;

const styles = StyleSheet.create({
    scheduleText: {
        textAlign: "center",
        fontSize: 24
    }
})
