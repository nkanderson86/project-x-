import React, { Component } from "react";
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { StyleSheet, View } from 'react-native'

export default class LoginHeaderImage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require("../../assets/images/icon.png")} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    }
});