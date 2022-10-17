import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const CardScreen = () => {
    const [fontsLoaded] = useFonts({
        'Pacifico': require('./../../assets/fonts/Pacifico-Regular.ttf'),
        'VT323': require('./../../assets/fonts/VT323-Regular.ttf'),
      });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return(
        <View style={styles.container}>
            <Image
        style={styles.pic}
        source={{
          uri: 'https://i.ytimg.com/vi/hXT9X1m-hbQ/maxresdefault.jpg',
        }}
      />
            <Text style={{fontFamily: 'Pacifico', fontSize: 24}}>tamer ardal</Text>
            <Text style={{marginBottom: 10, fontFamily: 'VT323', fontSize: 24}}>FLUTTER DEVELOPER</Text>
            <View style={styles.info}>
                <Icon name={'phone'} style={{padding: 8,}} />
                <Text style={{padding: 5, paddingRight: 5, fontWeight: '700'}}>+90 507 578 14 97</Text>
            </View>
            <View style={styles.info}>
                <Icon name={'envelope'} style={{padding: 8,}} />
                <Text style={{padding: 5, fontWeight: '700'}}>tamerardal@trakya.edu.tr</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pic: {
        width: 100,
        height: 100,
        borderRadius: 200 / 2,
    },
    container: {
        flex: 1,
        backgroundColor: '#5f9ea0',
        justifyContent: 'center',
        alignItems:'center',
    },
    info: {
        flexDirection: 'row',
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        alignContent: 'stretch',
        width: 250,
    },
});

export default CardScreen;