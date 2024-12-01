import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TwoButtons = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        {/* Tombol 1 */}
        <TouchableOpacity style={[styles.button, styles.buttonBlue]}>
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>

        {/* Tombol 2 */}
        <TouchableOpacity style={[styles.button, styles.buttonGreen]}>
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Menempatkan elemen di tengah secara vertikal
    alignItems: "center", // Menempatkan elemen di tengah secara horizontal
    backgroundColor: "#f5f5f5", // Warna latar belakang
  },
  buttonRow: {
    flexDirection: "row", // Menyusun tombol secara horizontal
    justifyContent: "space-between", // Memberikan jarak di antara tombol
    width: "60%", // Lebar total area untuk tombol
  },
  button: {
    flex: 1, // Tombol mengambil ruang yang sama
    paddingVertical: 10,
    marginHorizontal: 5, // Jarak antar tombol
    borderRadius: 5, // Membuat sudut tombol melengkung
    alignItems: "center",
  },
  buttonBlue: {
    backgroundColor: "blue",
  },
  buttonGreen: {
    backgroundColor: "green",
  },
  buttonText: {
    color: "white", // Warna teks pada tombol
    fontSize: 16, // Ukuran teks
    fontWeight: "bold", // Menebalkan teks
  },
});

export default TwoButtons;
