import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import ForgotPasswordForm from "../components/Forgot/ForgotPasswordForm"
import LoginHeaderImage from "../components/Login/LoginHeaderImage"
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class ForgotPasswordScreen extends Component {
    static navigationOptions = {
        title: 'Forgot Password',
    };

    render() {

        return (
            <Container>
                <LoginHeaderImage />
                <Content>
                    <ForgotPasswordForm />
                </Content>
            </Container>

        );
    }
}