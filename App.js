import { StyleSheet, View } from "react-native";
import Box from "./components/box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{backgroundColor: "blue", alignSelf: "flex-start"}} />
      <Box style={{backgroundColor: "red", alignSelf: "flex-end"}} />
      <Box style={{backgroundColor: "green", alignSelf: "center"}} />
      <Box style={{backgroundColor: "green", alignSelf: "stretch"}} />
      <Box style={{backgroundColor: "lightGreen"}} />
      <Box style={{backgroundColor: "lightRed"}} />
      {/* <View style={styles.darkMode}>
        <Text>Style inheritance</Text>
      </View>
      <View style={[styles.lightBlueBg, styles.box, styles.boxShadow]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.lightGreenBg, styles.box, styles.androidShadow]}>
        <Text>Lightgreen box</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-center",
    backgroundColor: "plum",
    flexDirection: "column",
    padding: 60,
    alignSelf: "stretch",
    flexWrap: "wrap-reverse"
  },
  darkMode: {
    backgroundColor: "black",
    color: "white",
  },
  box: {
    width: 250,
    height: 250,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5,
  },
  lightBlueBg: {
    backgroundColor: "blue",
  },
  lightGreenBg: {
    backgroundColor: "green",
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
  },
});