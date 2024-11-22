// components/CoursesScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const availableCourses = [
  { id: '1', name: 'Basic Housekeeping Skills', price: 100 },
  { id: '2', name: 'Gardening and Landscaping', price: 150 },
  { id: '3', name: 'Cooking Basics', price: 120 },
  { id: '4', name: 'Advanced Childcare Techniques', price: 200 },
];

const CoursesScreen = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleSelectCourse = (course) => {
    if (!selectedCourses.includes(course)) {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const calculateDiscount = () => {
    const numCourses = selectedCourses.length;
    if (numCourses === 2) return 0.05;
    if (numCourses === 3) return 0.1;
    if (numCourses > 3) return 0.15;
    return 0;
  };

  const calculateTotalPrice = () => {
    const total = selectedCourses.reduce((sum, course) => sum + course.price, 0);
    const discount = calculateDiscount();
    return total - total * discount;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Courses</Text>
      <FlatList
        data={availableCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - ${item.price}</Text>
            <Button title="Select Course" onPress={() => handleSelectCourse(item)} />
            </View>
        )}
      />
      {selectedCourses.length > 0 && (
        <View style={styles.summary}>
          <Text style={styles.subtitle}>Selected Courses:</Text>
          {selectedCourses.map((course) => (
            <Text key={course.id}>{course.name} - ${course.price}</Text>
          ))}
          <Text style={styles.subtitle}>Total Price: ${calculateTotalPrice().toFixed(2)}</Text>
        </View>
      )}
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

export default CoursesScreen;
