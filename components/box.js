import { StyleSheet, Text, View } from "react-native";

export default function Box({style}) {
  return (
    <View
      style={style}
    >
      <Text style={styles.text}>Box</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "",
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
