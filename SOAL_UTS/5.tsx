import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Layar pertama (FirstScreen)
const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Second Screen"
        onPress={() => navigation.navigate("SecondScreen")}
      />
    </View>
  );
};

// Layar kedua (SecondScreen)
const SecondScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Second Screen</Text>
    </View>
  );
};

// Membuat stack navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default App;
