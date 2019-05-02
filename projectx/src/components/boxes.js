import React, { Component } from 'react';
import { Text, View } from 'react-native';


export class Boxes extends Component {
    render() {
        return (
            // Try setting `flexDirection` to `column`.
            <View style={{ flex: 1, flexDirection: 'row', margin: 40 }}>
                <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
            </View >
        );
    }
};

export default Boxes;