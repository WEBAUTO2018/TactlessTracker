import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Navigation from '../../navigation';
import {useNavigation} from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import SignUpSuccessScreen from '../SignUpSuccessScreen';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();

    const onSignUpPressed = async() => {
        try{
            await Auth.signUp({username, password, passwordRepeat, attributes: {preferred_username: username, email}});
            navigation.navigate('Sign Up Success');
        }
        catch(e){
            Alert.alert(e.message);
        }
    };

    const onSignInPressed = () => {
        navigation.navigate('Sign In')
    };

    const onSignUpFacebook = () => {
        //console.warn("Sign up with facebook pressed");
    };

    const onSignUpGoogle = () => {
        //console.warn("Sign up with google pressed");
    };

    const onSignUpApple = () => {
        //console.warn("Sign up with apple pressed");
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>

                <CustomInput 
                    placeholder="Username" 
                    value={username} 
                    setValue={setUsername}
                />

                <CustomInput 
                    placeholder="Email" 
                    value={email} 
                    setValue={setEmail}
                />

                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />

                <CustomInput
                    placeholder="Repeat Password"
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry={true}
                />

                <CustomButton
                    text="Sign Up"
                    onPress={onSignUpPressed}
                    type="PRIMARY"
                />

                <Text style={styles.text}>
                    By signing up, you confirm that you accept our 
                    <Text style={styles.link}> Terms of Use </Text> and 
                    <Text style={styles.link}> Privacy Policy</Text>
                </Text>

                <CustomButton
                    text="Sign Up with Facebook"
                    onPress={onSignUpFacebook}
                    bgColor="#E7EAF4"
                    fgColor="#4765A9"
                />

                <CustomButton
                    text="Sign Up with Google"
                    onPress={onSignUpGoogle}
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                />

                <CustomButton
                    text="Sign In with Apple"
                    onPress={onSignUpApple}
                    bgColor="#e3e3e3"
                    fgColor="#363636"
                />

                <CustomButton
                    text="Already have an account? Sign In"
                    onPress={onSignInPressed}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#051C60",
        margin: 10
    },

    text: {
        color: "gray",
        marginVertical: 10
    },

    link: {
        color: "#FDB075"
    }
});

export default SignUpScreen;