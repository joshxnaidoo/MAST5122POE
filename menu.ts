// components/MenuManagementScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

// Dummy data for demonstration, replace with your actual import
const availableCourses = [
  { id: '1', name: 'Basic Housekeeping Skills', price: 100 },
  { id: '2', name: 'Gardening and Landscaping', price: 150 },
  { id: '3', name: 'Cooking Basics', price: 120 },
  { id: '4', name: 'Advanced Childcare Techniques', price: 200 },
];

const MenuManagementScreen = () => {
  const [menuItems, setMenuItems] = useState([]);

  const addMenuItem = (item) => {
    // Ensure the item is not already added
    if (!menuItems.find(course => course.id === item.id)) {
      setMenuItems(prevItems => [...prevItems, item]);
    }
  };

  const removeMenuItem = (id) => {
    setMenuItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Menu Items</Text>
      <FlatList
        data={availableCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - ${item.price}</Text>
            <Button title="Add Item" onPress={() => addMenuItem(item)} />
            <Button title="Remove Item" onPress={() => removeMenuItem(item.id)} color="red" />
          </View>
        )}
      />
      <View style={styles.summary}>
        <Text style={styles.subtitle}>Current Menu:</Text>
        {menuItems.map((item) => (
          <Text key={item.id}>{item.name} - ${item.price}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  summary: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default MenuManagementScreen;
