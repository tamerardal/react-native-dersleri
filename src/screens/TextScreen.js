import React, { useState } from "react";
import {View, Text, StyleSheet} from 'react-native';
import { TextInput } from "react-native-gesture-handler";

export const TextScreen = () => {
    const [name, setName] = useState("");
    return (
        <View>

            <Text style={{fontSize: 32}}>Enter Name: </Text>
            <TextInput 
                style={styles.input}
                autoCorrect={true}
                autoCapitalize="sentences"
                value={name}
                onChangeText={newValue => setName(newValue)}
             />
             <Text>Your name is {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 0.5,
    }
});
