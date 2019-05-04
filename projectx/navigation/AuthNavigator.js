import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SignupScreen from '../screens/SignupScreen';

const HomeStack = createStackNavigator({
    // Home is our route
    // we can use navigation actions to route to home route or other routes., 
    // like add device page
    Home: HomeScreen,
    Forgot: ForgotPasswordScreen,
    Signup: SignupScreen,

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
