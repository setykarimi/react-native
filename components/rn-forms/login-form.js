import React, { useState } from "react";
import {
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!username) error.username = "Username is required";
    if (!password) error.username = "Password is required";

    setError(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS == "ios" ? 100 : 0}
      style={styles.container}
    >
      <View style={styles.form}>
        <Image
          source={require("../../assets/adaptive-icon.png")}
          style={styles.image}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          onChangeText={setUsername}
        />
        {error.username && <Text style={styles.error}>{error.username}</Text>}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          onChangeText={setPassword}
        />
        {error.username && <Text style={styles.error}>{error.password}</Text>}

        <Button title="Login" onPress={() => validateForm()} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 50,
  },
  error: {
    color: "red",
    marginBottom: 10
  }
});
