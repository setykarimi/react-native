import { Platform, SafeAreaView, StyleSheet } from "react-native";
import PokemanCard from "./components/pokeman/card";
export default function App() {
  return <SafeAreaView style={styles.container}>
    <PokemanCard />
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS == "android" ? 25 : 0
  },
});
