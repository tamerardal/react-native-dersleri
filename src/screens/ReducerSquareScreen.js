import React, { useReducer } from 'react';
import {View,StyleSheet,Text} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number}
    // action === {colorToChange: 'red' || 'green' || 'blue', amount: +15 || -15}

    // switch (action.colorToChange) {
    //     case 'red':
    //         return state.red + action.amount > 255 || state.red + action.amount < 0 ? state : {...state, red: state.red + action.amount};
    //     case 'green':
    //         return state.green + action.amount > 255 || state.green + action.amount < 0 ? state : {...state, green: state.green + action.amount};
    //     case 'blue':
    //         return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state : {...state, blue: state.blue + action.amount};
    //     default:
    //         return state;
    // }

    switch (action.type) {
        case "change_red":
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {...state, red: state.red + action.payload};
        case "change_green": 
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {...state, green: state.green + action.payload};
        case "change_blue": 
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : {...state, blue: state.blue + action.payload};
        default:
            return state;
    }
};

const ReducerSquareScreen = () =>{
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0 });
    return (
        <View>
            <ColorCounter 
                color="RED" 
                onIncrease={() => {
                    dispatch({type: 'change_red', payload: COLOR_INCREMENT})
                }} 
                onDecrease={() => {
                    dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})
                }} />
            <ColorCounter 
                color="GREEN" 
                onIncrease={() => {
                    dispatch({type: 'change_green', payload: COLOR_INCREMENT})
                }} 
                onDecrease={() => {
                    dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})
                }} />
            <ColorCounter 
                color="BLUE" 
                onIncrease={() => {
                    dispatch({type: 'change_blue', payload: COLOR_INCREMENT})
                }} 
                onDecrease={() => {
                    dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})
                }} />

            <Text>RED: {state.red}</Text>
            <Text>GREEN: {state.green}</Text>
            <Text>BLUE: {state.blue}</Text>

            <View style={{height: 150, width: 150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}>

            </View>
        </View>
    );
};

const styles= StyleSheet.create({});

export default ReducerSquareScreen;