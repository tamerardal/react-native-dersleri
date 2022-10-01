import React from "react";
import {View, FlatList, Text, StyleSheet} from 'react-native';

const ListScreen = () => {
    let friends = [
        {name: 'Friends 1'},
        {name: 'Friends 2'},
        {name: 'Friends 3'},
        {name: 'Friends 4'},
        {name: 'Friends 5'},
        {name: 'Friends 6'},
        {name: 'Friends 7'},
    ];
    const renderItem = ({item}) => {
        return (
            <Text>{item.name}</Text>
        );
    };
    return(
        <View>
            <FlatList data={friends} renderItem={renderItem} />
        </View>
    );
};

const style = StyleSheet.create({});

export default ListScreen;