import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import Login from "../components/Login"
// import Icon from 'react-native-vector-icons/FontAwesome';



export default class HomeScreen extends Component {
  render() {

    // goToMain = () => {
    //   const navigationAction = NavigationActions.navigate({
    //     routeName: "Main",
    //   });
    //   this.props.navigation.dispatch(navigationAction);
    // }

    return (
      <Container>
        <Login />
      </Container>
    );
  }
}