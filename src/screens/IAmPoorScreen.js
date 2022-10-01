import React from "react";
import {Text, StyleSheet, View, Image} from 'react-native';

const IAmRichScreen = () => {
    return (
        <View style={styles.container}>
          <Image style={{
            width: 400, height: 400,
            resizeMode: 'contain',
          }} source={require('../assets/iampoor.jpg')} />
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