import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import LoginForm from "../components/Login/LoginForm"
import LoginHeaderImage from "../components/Login/LoginHeaderImage"
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'ProjectX Login',
  };

  render() {
    return (
      <Container>
        <LoginHeaderImage />
        <Content>
          <LoginForm navigation={this.props.navigation} />
        </Content>
      </Container>
    );
  }
}