import React from "react";
import {Text, StyleSheet, View, Image} from 'react-native';

const IAmRichScreen = () => {
    return (
        <View style={styles.container}>
          <Image style={{
            flex: 1,
            resizeMode: 'cover',
          }} source={require('../assets/iamrich.jpg')} />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
      alignItems: "center",
      justifyContent: "center",
    }
  });

  export default IAmRichScreen;