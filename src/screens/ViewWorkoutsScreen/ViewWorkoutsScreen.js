import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import { DataStore } from '@aws-amplify/datastore'
import { Workouts } from '../../models'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

import { API } from 'aws-amplify';

const ViewWorkoutsScreen = async () => {

    //const viewWorkouts = async () => {
        //const models = await DataStore.query(Workouts);
        
        //for await (const model of models) {
        //return(
          //  console.log("Fucking hell")
        //)
        //}

       // return(
         //   <Text>fuck</Text>
        //);

      /*  return (
            <div className="col">
              <h1>Mi Casa</h1>
              <p>This is my house y&apos;all!</p>
              {models.map(models => <div>{models.}</div>)}
            </div>
          );*/

        
    //}
    try{
        const models = await DataStore.query(Workouts);
        console.log(models);
    }
    catch(error) {
        console.log(error)
    }
    
    return(
        <Text>Kill me</Text>
        
    );
};

export default ViewWorkoutsScreen;