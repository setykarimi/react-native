import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CourseListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Course list Screen</Text>
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
