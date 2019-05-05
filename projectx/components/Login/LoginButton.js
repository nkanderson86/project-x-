// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationActions, withNavigation } from "react-navigation";

// create classful component
class LoginButton extends Component {

    // method to route to another screen
    goToMain = () => {
        const navigationAction = NavigationActions.navigate({
            routeName: "Main",
        });
        this.props.navigation.dispatch(navigationAction);
    }

    render() {
        // button with logic to call method to route to another screen 
        return (
            <Button onPress={this.goToMain} style={styles.loginButton} title="Login"
            />
        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(LoginButton);

// styling
const styles = StyleSheet.create({
    loginButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },
});