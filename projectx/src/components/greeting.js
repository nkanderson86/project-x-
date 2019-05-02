import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

class Greeting extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.red}>Hello {this.props.name}!</Text>
            </View>
        );
    }
}

export class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center', top: 50 }}>
                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
            </View >
        );
    }
}


export default LotsOfGreetings; 