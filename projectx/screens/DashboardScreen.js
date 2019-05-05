// required imports and dependencies
import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import Devices from "../components/Dashboard/Devices"
import { withNavigation } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome';

// create classful component
class DashboardScreen extends Component {
    // title for screen
    static navigationOptions = {
        title: 'Dashboard',
    };

    render() {

        return (
            // container for components
            <Container>
                {/* devices acordian element, could inject statuses and add new device? */}
                <Devices />
            </Container>

        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(DashboardScreen);