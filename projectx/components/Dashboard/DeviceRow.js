import React, { Component } from 'react';
import { StyleSheet, View, Container } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { NavigationActions, withNavigation } from "react-navigation";
import { CheckBox } from 'react-native-elements';
import LoginHeaderImage from "../Login/LoginHeaderImage";
// import API from '../../utils/API'
import UserSetup from '../userAuthListener'

// put  device id in state and hide it from user and then populate 
class DeviceRow extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor Props", props.navigation.state.params.data.UID);
        this.state = {
            tableHead: ['Name', 'Device ID', 'Status', 'Edit'],
            tableData: [
            ],
            UID: props.navigation.state.params.data.UID,
            page: "dashboard"

        }
    }

    componentDidMount() {
        // inceptor to add userId to headers in order to make API calls as an authenticated user.  UserSetup also has an API call to retrieve all the arduinos for the account that will then be displayed to user on a table. 
        const setState = this.setState.bind(this)
        UserSetup(this.state.UID, setState, this.state.page)
    }

    goToEditDevice(index) {
        // console.log(index);
        const navigationAction = NavigationActions.navigate({
            routeName: "EditDevice",
            params: { name: this.state.tableData[index][0], UID: this.state.UID, deviceId: this.state.tableData[index][1] }
            //this.state.tableData[0]
        });
        this.props.navigation.dispatch(navigationAction);
    }

    render() {
        const state = this.state;
        // const element = (cellData, index) => (
        //     <CheckBox center iconType='material' uncheckedIcon='add' checked={this.state.checked} onPress={() => this.goToEditDevice(index)} />
        // );

        return (

            < View style={styles.container} >
                <LoginHeaderImage />
                <Table borderStyle={{ borderColor: 'black' }} style={{ marginTop: 20 }}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                    {
                        state.tableData.map((rowData, index) => (
                            <TableWrapper key={index} style={styles.row}>
                                {
                                    rowData.map((cellData, cellIndex) => (
                                        <Cell key={cellIndex} data={cellIndex === 3 ? <CheckBox center iconType='material' uncheckedIcon='add' checked={this.state.checked} onPress={() => this.goToEditDevice(index)} /> : cellData} textStyle={styles.text} />
                                    ))
                                }
                            </TableWrapper>
                        ))
                    }
                </Table>
            </View >
            // </Container>
        )
    }
}

export default withNavigation(DeviceRow);

const styles = StyleSheet.create({
    container: { flex: 1, marginLeft: 10, marginRight: 10, marginTop: 0, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#FFFFFF' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#E8E8E8' },

});