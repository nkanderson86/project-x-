// // required imports and dependencies
// import React, { Component } from 'react';
// import { StyleSheet } from 'react-native';
// import { Button } from 'react-native-elements';
// import { NavigationActions, withNavigation } from "react-navigation";

// // create classful component
// class CreateAccountButton extends Component {

//     // method to route to another screen
//     createAccount = () => {
//         console.log("Calling the function")
//         const navigationAction = NavigationActions.navigate({
//             routeName: "Home",
//         });
//         this.props.navigation.dispatch(navigationAction);
//     }

//     render() {
//         // button with logic to call method to route to another screen 
//         return (
//             <Button onPress={this.createAccount} style={styles.createAccount} title="Create Account"
//             />
//         );
//     }
// }

// // export component withNavigation method which will pass props
// export default withNavigation(CreateAccountButton);

// // styling
// const styles = StyleSheet.create({
//     createAccount: {
//         marginTop: 40,
//         marginRight: 20,
//         marginLeft: 20
//     },
// });