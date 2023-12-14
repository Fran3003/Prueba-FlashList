import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'; 

type RootStackParams = {
  Home: undefined; 
  Galery: undefined;
};


const Home: React.FC<StackScreenProps<RootStackParams, 'Home'>> = ({ navigation }) => {
  const goToNextScreen = () => {
    navigation.navigate('Galery');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Masonry Layout</Text>
      <TouchableOpacity style={styles.button} onPress={goToNextScreen}>
        <Text style={styles.buttonText}>Gallery</Text>
      </TouchableOpacity>
    </View>
  );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ADD8E6',
      padding: 16,
    },
    welcomeText: {
      fontSize: 18,
      marginBottom: 20,
      color: 'black', 
      fontWeight: 'bold', 
    },
    button: {
      backgroundColor: 'blue', 
      borderRadius: 10,
      padding: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  });


export default Home;