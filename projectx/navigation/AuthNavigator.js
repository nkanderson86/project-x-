import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SignupScreen from '../screens/SignupScreen';
// import DashboardScreen from '../screens/DashboardScreen';

const HomeStack = createStackNavigator({
    // Home is our route
    // we can use navigation actions to route to home route or other routes., 
    // like add device page
    Home: HomeScreen,
    Forgot: ForgotPasswordScreen,
    Signp: SignupScreen,
    // Dashboard: DashboardScreen,

});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

export default HomeStack;
