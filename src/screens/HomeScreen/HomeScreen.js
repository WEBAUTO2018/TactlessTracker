import * as React from 'react'
import { StyleSheet, Text, View, Pressable, StatusBar } from 'react-native';
import { DataStore } from '@aws-amplify/datastore';
import { Workouts } from '../../models';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();

  const workoutsClicked = () => {
    navigation.navigate('Add Workout');
  };

  const viewWorkoutsClicked = () => {
    navigation.navigate('Workouts');
  }


    return (
      <View style={styles.contatiner}>
            <Text style={styles.title}>Welcome Back, Small Body!</Text>
            <Text style={styles.quip}>You better be at the gym right now ...</Text>
            
            <CustomButton 
                  text={"Enter Workout Data"}
                  onPress={workoutsClicked}
                  type="PRIMARY"
            />

            <CustomButton 
                  text={"View Workout Information"}
                  onPress={viewWorkoutsClicked}
                  type="PRIMARY"
            />
      </View>
    )
}

const styles = StyleSheet.create({
    contatiner: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: "#fcd7ed",
    },

    title: {
      paddingTop: 10,
      fontSize: 24,
      fontWeight: "bold",
      color: "black",
      margin: 10
    },

    quip: {
      paddingBottom: 20
    },

    buttonStyle: {
      paddingTop: 500
    },
})

export default HomeScreen;