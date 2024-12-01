import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterApp = () => {
  // Menggunakan useState untuk mengelola state "count"
  const [count, setCount] = useState(0);

  // Fungsi untuk menambah jumlah klik
  const handleButtonPress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Jumlah Klik: {count}</Text>
      <Button title="Klik Saya!" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default CounterApp;
