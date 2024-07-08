import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function DashboardScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard Screen</Text>
      <Button title="Toggle drawer" onPress={()=> navigation.toggleDrawer()}/>
      <Button title="Setting" onPress={()=> navigation.jumpTo("Setting")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
