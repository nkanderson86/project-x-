import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { NavigationActions, withNavigation } from "react-navigation";
import { CheckBox } from 'react-native-elements';

class DeviceRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Name', 'Status', 'Edit'],
            tableData: [
                ['Plant 1', 'Good', ''],
                ['Plant 2', 'Err', ''],
            ]
        }
    }

    goToSignup() {
        const navigationAction = NavigationActions.navigate({
            routeName: "Signup",
        });
        this.props.navigation.dispatch(navigationAction);
    }

    render() {
        const state = this.state;
        const element = () => (
            <CheckBox center iconType='material' uncheckedIcon='add' checked={this.state.checked} onPress={() => this.goToSignup()} />
        );


        return (
            <View style={styles.container}>
                <Table borderStyle={{ borderColor: 'black' }}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                    {
                        state.tableData.map((rowData, index) => (
                            <TableWrapper key={index} style={styles.row}>
                                {
                                    rowData.map((cellData, cellIndex) => (
                                        <Cell key={cellIndex} data={cellIndex === 2 ? element(cellData, index) : cellData} textStyle={styles.text} />
                                    ))
                                }
                            </TableWrapper>
                        ))
                    }
                </Table>
            </View>
        )
    }
}

export default withNavigation(DeviceRow);

const styles = StyleSheet.create({
    container: { flex: 1, marginLeft: 10, marginRight: 10, marginTop: 10, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#FFFFFF' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#E8E8E8' },
});