import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  const navigation = useNavigation();
  const route = useRoute()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <Text style={styles.text}>name: {route.params.name}</Text>
      <Button
        title="Update the name"
        onPress={() => navigation.setParams({
          name: "Codevolution"
        })}
      />
      <Button
        title="Go back with data"
        onPress={() => navigation.navigate("Home",{
          result: "Data from about"
        })}
      />
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
