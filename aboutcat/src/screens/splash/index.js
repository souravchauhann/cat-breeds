import React, { useEffect } from "react";
import { Text, View, StyleSheet, SafeAreaView, Image, Animated, Easing } from "react-native";
import { LightGray, PrimaryColor, white } from "../../../colors";

const Splash = ({ navigation }) => {

  const translateX = new Animated.Value(-200); 

  function Animation() {
    Animated.timing(translateX, {
      toValue: 0, // Move to the top of the screen
      duration: 900, // Animation duration in milliseconds
      easing: Easing.linear, // Use linear easing function
      useNativeDriver: true, // Enable native driver for better performance
    }).start(); // Start the animation
  }

  useEffect(() => {
    Animation()
    setTimeout(() => {
      navigation.replace('Home')
    }, 2000);

  }, [translateX]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Text

        style={styles.text}>Welcome to my cat app</Animated.Text>
      <Animated.Image
        style={{ transform: [{ translateX }], height: 100, width: 100 }}

        source={require('../../assets/images/cat.png')}
      />


    </SafeAreaView>
  )
}
export default Splash

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: LightGray,
    // justifyContent:'center',
    alignItems: 'center'
  },
  text: {
    color: PrimaryColor,
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 0.30,
    marginBottom: 200,
    marginTop: 100
  },
  line: {
    width: '90%',
    height: 5,
    backgroundColor: '#000000',
  },

})