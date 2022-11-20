import React from 'react';
import {View, ScrollView, Text} from 'react-native';

const SignUpScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Text>Sign Up Successful! Please Login to access home screen</Text>
            </View>
        </ScrollView>
    );
};

export default SignUpScreen;