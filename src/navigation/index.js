import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpSuccessScreen from '../screens/SignUpSuccessScreen';
import HomeScreen from '../screens/HomeScreen';
import WorkoutsScreen from '../screens/WorkoutsScreen/WorkoutsScreen';
import ViewWorkoutsScreen from '../screens/ViewWorkoutsScreen';

const Navigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Sign In" component={SignInScreen} />
                <Stack.Screen name="Sign Up" component={SignUpScreen} />
                <Stack.Screen name="Sign Up Success" component={SignUpSuccessScreen} />
                <Stack.Screen name="Home Screen" component={HomeScreen} />
                <Stack.Screen name="Add Workout" component={WorkoutsScreen} />
                <Stack.Screen name="Workouts" component={ViewWorkoutsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );  
};

export default Navigation;