import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class Rows extends Component {
    render() {
        return (
            // Try setting `alignItems` to 'flex-start'
            // Try setting `justifyContent` to `flex-end`.
            // Try setting `flexDirection` to `row`.
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
            }}>
                <View style={{ height: 100, backgroundColor: 'steelblue' }} />
            </View>
        );
    }
};

// skip this line if using Create React Native App
