import React from 'react';
import {View, ScrollView, Text} from 'react-native';

const HomeScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Text>Login Successful! Welcome to Home Screen</Text>
            </View>
        </ScrollView>
    );
};

export default HomeScreen;