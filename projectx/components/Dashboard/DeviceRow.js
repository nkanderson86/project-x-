import React, { Component } from 'react';
import { StyleSheet, View, Container } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { NavigationActions, withNavigation } from "react-navigation";
import { CheckBox } from 'react-native-elements';
import LoginHeaderImage from "../Login/LoginHeaderImage"

// put  device id in state and hide it from user and then populate 
class DeviceRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Name', 'Status', 'Edit'],
            tableData: [
                ['Plant 1', 'Status', ''],
                ['Plant 2', 'Status', ''],
            ],
            // deviceData: [
            //     ["1"],
            //     ["2"],
        }
    }

    componentDidMount() {
        // hit database and get user device information that has been input
        // which will incliude name, populate status in index 1, device id hidden
        //
    }

    goToEditDevice(index) {
        console.log(index);
        const navigationAction = NavigationActions.navigate({
            routeName: "EditDevice",
            params: { data: this.state.tableData[index][0] }
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
                                        <Cell key={cellIndex} data={cellIndex === 2 ? <CheckBox center iconType='material' uncheckedIcon='add' checked={this.state.checked} onPress={() => this.goToEditDevice(index)} /> : cellData} textStyle={styles.text} />
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