// navigation/navigation.js
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import MainScreen from '../components/mainScreen'; // Adjust the path as needed
import BookingScreen from '../components/bookingScreen'; // Adjust the path as needed
import CoursesScreen from '../components/CoursesScreen'; // Adjust the path as needed
import MenuManagementScreen from '../components/MenuManagementScreen'; // Adjust the path as needed
import FilterCoursesScreen from '../components/FilterCoursesScreen'; // Adjust the path as needed

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Main">
    <Stack.Screen name="Main" component={MainScreen} />
    <Stack.Screen name="Booking" component={BookingScreen} />
    <Stack.Screen name="Courses" component={CoursesScreen} />
    <Stack.Screen name="MenuManagement" component={MenuManagementScreen} />
    <Stack.Screen name="FilterCourses" component={FilterCoursesScreen} />
  </Stack.Navigator>
);
