import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
import { withNavigation } from 'react-navigation';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

//* acordian element, could inject statuses and add new device?
class Devices extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content padder>
                    <Accordion
                        dataArray={dataArray}
                        icon="add"
                        expandedIcon="remove"
                        iconStyle={{ color: "green" }}
                        expandedIconStyle={{ color: "red" }}
                    />
                </Content>
            </Container>
        );
    }
}

export default withNavigation(Devices);