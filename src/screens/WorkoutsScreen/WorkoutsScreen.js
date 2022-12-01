import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import { DataStore } from '@aws-amplify/datastore'
import { Workouts } from '../../models'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

export default function WorkoutsScreen({}) {
    const [workout, setWorkout] = useState('');
    const [date, setDate] = useState('');
    const [length, setLength] = useState('');
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');

    const addWorkout = async () => {
        // post workout to database
        await DataStore.save(
            new Workouts({
                WorkoutName: "Lorem ipsum dolor sit amet",
                Reps: 1020,
                Date: "1970-01-01Z",
                Length: 123.45,
                Weight: "Lorem ipsum dolor sit amet"
            })
        );
    }

    const deleteWorkout = async () => {
        // delete workout from database
        const modelToDelete = await DataStore.query(Workouts, 123456789);
        DataStore.delete(modelToDelete);
    }
    
    return (
        <View style={styles.contatiner} >
                <CustomInput 
                    placeholder="Workout Name" 
                    value={workout} 
                    setValue={setWorkout}
                />

                <CustomInput 
                    placeholder="Date" 
                    value={date} 
                    setValue={setDate}
                />

                <CustomInput 
                    placeholder="Length" 
                    value={length} 
                    setValue={setLength}
                />

                <CustomInput 
                    placeholder="Weight" 
                    value={weight} 
                    setValue={setWeight}
                />

                <CustomInput 
                    placeholder="Reps" 
                    value={reps} 
                    setValue={setReps}
                />

                <CustomButton 
                    text={"Add Workout"}
                    onPress={addWorkout}
                    type="PRIMARY"
            	/>

            	<CustomButton 
                    text={"Delete Workout"}
                    onPress={deleteWorkout}
                    type="TERTIARY"
            	/>
                
        </View>
    );
    
};

const styles = StyleSheet.create({
    contatiner: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 20
    }
})



// Query:
/*const models = await DataStore.query(Workouts);
console.log(models);*/

// Create
/*await DataStore.save(
    new Workouts({
		"WorkoutName": "Lorem ipsum dolor sit amet",
		"Reps": 1020,
		"Date": "1970-01-01Z",
		"Length": 123.45,
		"Weight": "Lorem ipsum dolor sit amet"
	})
);*/

// Update
/* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
/*await DataStore.save(Workouts.copyOf(CURRENT_ITEM, item => {
    // Update the values on {item} variable to update DataStore entry
}));*/

// Delete
/*const modelToDelete = await DataStore.query(Workouts, 123456789);
DataStore.delete(modelToDelete);*/