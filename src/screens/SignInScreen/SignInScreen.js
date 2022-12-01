import React, { useState } from 'react';
import {View, Image, StyleSheet, useWindowDimensions, ScrollView, Alert} from 'react-native';
import Logo from '../../../assets/images/TactlessTrackerLogo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import HomeScreen from '../HomeScreen';

const SignInScreen = () => {
    const {height} = useWindowDimensions();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);

    const onSignInPressed = async() => {
        // validate user from database
        // if successful, then navigate wherever, else display error message
        if(loading){
            return;
        }

        setLoading(true);
        try{
            await Auth.signIn(username, password);
            navigation.navigate('Home Screen');
        }catch(e){
            Alert.alert(e.message)
        }
        setLoading(false);
    };

    const onForgotPasswordPressed = () => {
        //console.warn("Forgot Password Pressed");
    };

    const onSignInFacebook = () => {
       // console.warn("Sign in with facebook pressed");
    };

    const onSignInGoogle = () => {
       // console.warn("Sign in with google pressed");
    };

    const onSignInApple = () => {
      //  console.warn("Sign in with apple pressed");
    };

    const onCreateAccountPressed = () => {
        navigation.navigate('Sign Up');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image 
                    source={Logo} 
                    style={[styles.logo, {height: 200}]} 
                    resizeMode="contain"
                />

                <CustomInput 
                    placeholder="Username" 
                    value={username} 
                    setValue={setUsername}
                />

                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />

                <CustomButton
                    text={loading ? "Loading..." : "Sign In"}
                    onPress={onSignInPressed}
                    type="PRIMARY"
                />

                <CustomButton
                    text="Forgot Password?"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />

                <CustomButton
                    text="Sign In with Facebook"
                    onPress={onSignInFacebook}
                    bgColor="#E7EAF4"
                    fgColor="#4765A9"
                />

                <CustomButton
                    text="Sign In with Google"
                    onPress={onSignInGoogle}
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                />

                <CustomButton
                    text="Sign In with Apple"
                    onPress={onSignInApple}
                    bgColor="#e3e3e3"
                    fgColor="#363636"
                />

                <CustomButton
                    text="Don't have an account? Create one"
                    onPress={onCreateAccountPressed}
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

    logo: {
        width: '70%',
        maxWidth: 300,
        height: 100,
        maxHeight: 300,
        margin: 30
    },
});

export default SignInScreen;