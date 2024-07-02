import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

export default function RnForms() {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false)
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
      <TextInput
        style={[styles.input, styles.multiLine]}
        placeholder="message"
        multiline
      />
      <Text> My name is {name}</Text>

      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark mode</Text>
        <Switch value={isDarkMode} onValueChange={()=> setIsDarkMode(prv=> !prv)}
          trackColor={{false: "#767577", true: 'lightblue'}}
          thumbColor="#f4f3f4"
          />
      </View>
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
  multiLine: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
  text:{
fontSize:30,
fontWeight: '700'
  }
});
