import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/home";
import ResearchScreen from "./screens/reasearch";
import EraScreen from "./screens/era";
import CoursesScreen from "./screens/courses";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="reasearch" component={ResearchScreen} />
        <Stack.Screen name="era" component={EraScreen} />
        <Stack.Screen name="courses" component={CoursesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;