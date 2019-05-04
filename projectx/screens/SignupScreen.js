import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import SignupForm from "../components/Signup/SignupForm"
import LoginHeaderImage from "../components/Login/LoginHeaderImage"
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class SignupScreen extends Component {
    static navigationOptions = {
        title: 'Signup',
    };

    render() {

        return (
            <Container>
                <LoginHeaderImage />
                <Content>
                    <SignupForm />
                </Content>
            </Container>

        );
    }
}