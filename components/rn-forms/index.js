import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

export default function RnForms() {
  const [name, setName] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="name eg: ..."
        // autoCorrect={false}
        // autoCapitalize="none"
        // secureTextEntry
        // keyboardType="numeric"
      />
      <Text> My name is {name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    padding: 12,
    margin: 16,
    borderWidth: 2,
  },
});
