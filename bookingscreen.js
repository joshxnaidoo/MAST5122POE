// components/bookingScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useBookingForm } from '../hooks/useBookingForm';

const BookingScreen = () => {
  const { name, date, contact, setName, setDate, setContact, handleBooking } = useBookingForm();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make a Booking</Text>
      <TextInput placeholder="Your Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Preferred Date" value={date} onChangeText={setDate} style={styles.input} />
      <TextInput placeholder="Contact Information" value={contact} onChangeText={setContact} style={styles.input} />
      <Button title="Submit Booking" onPress={handleBooking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default bookingScreen;
