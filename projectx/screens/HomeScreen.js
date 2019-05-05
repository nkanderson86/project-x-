// required imports and dependencies
import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import LoginForm from "../components/Login/LoginForm"
import LoginHeaderImage from "../components/Login/LoginHeaderImage"
import { withNavigation } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome';

// create classful component
class HomeScreen extends Component {
  // title for screen
  static navigationOptions = {
    title: 'ProjectX Login',
  };

  render() {
    return (
      // container for components
      <Container>
        {/* icon/logo */}
        <LoginHeaderImage />
        {/* login form component */}
        <Content>
          <LoginForm />
        </Content>
      </Container>
    );
  }
}

// export component withNavigation method which will pass props
export default HomeScreen;