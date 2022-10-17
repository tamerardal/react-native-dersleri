import React, { useState } from 'react';
import {View,StyleSheet,Text} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () =>{
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const setColor = (color, change) => {
        // fonksiyonun alabileceği olası değerler.
        // color === 'red', 'green', 'blue'
        // change === +15, -15

        // if (color = 'red') {
        //     if (red + change > 255 || red + change < 0) {
        //         return;
        //     } 
        //     setRed(red+change);
        // }
        // if (color = 'green') {
        //     if (green + change > 255 || green + change < 0) {
        //         return;
        //     } else {
                
        //     }
        // }
        // if (color = 'blue') {
        //     if (blue + change > 255 || blue + change < 0) {
        //         return;
        //     } else {
                
        //     }
        // }

        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;

            default:
                return;
        }
    };
    return (
        <View>
            <ColorCounter 
                color="RED" 
                onIncrease={() => setColor('red', COLOR_INCREMENT)} 
                onDecrease={() => setColor('red',-1* COLOR_INCREMENT)} />
            <ColorCounter 
                color="GREEN" 
                onIncrease={() => setColor('green', COLOR_INCREMENT)} 
                onDecrease={() => setColor('green',-1* COLOR_INCREMENT)} />
            <ColorCounter 
                color="BLUE" 
                onIncrease={() => setColor('blue', COLOR_INCREMENT)} 
                onDecrease={() => setColor('blue',-1* COLOR_INCREMENT)} />

            <Text>RED: {red}</Text>
            <Text>GREEN: {green}</Text>
            <Text>BLUE: {blue}</Text>

            <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}>

            </View>
        </View>
    );
};

const styles= StyleSheet.create({});

export default SquareScreen;