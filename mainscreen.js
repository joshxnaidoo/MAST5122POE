// components/MainScreen.js
import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Empowering the Nation</Text>
      <Text style={styles.subtitle}>Upskill domestic workers and gardeners to unlock new opportunities</Text>
      <Button
        title="View Available Courses"
        onPress={() => navigation.navigate('Courses')}
      />
      <Button
        title="Make a Booking"
        onPress={() => navigation.navigate('Booking')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default MainScreen;