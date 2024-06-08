import { Platform, SafeAreaView, StyleSheet } from "react-native";
import PokemanCard from "./components/pokeman/card";
export default function App() {
  const charmanData = {
    name: "Charmandar",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };
  return (
    <SafeAreaView style={styles.container}>
      <PokemanCard {...charmanData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS == "android" ? 25 : 0,
  },
});
