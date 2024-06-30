import { Platform, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import PokemanCard from "./components/pokeman/card";
import RnList from "./components/rn-list";
import SectionListComp from "./components/section-list";
export default function App() {
  const data = [
    {
      name: "Charmandar",
      image: require("./assets/charmander.png"),
      type: "Fire",
      hp: 39,
      moves: ["Scratch", "Ember", "Growl", "Leer"],
      weaknesses: ["Water", "Rock"],
    },
    {
      name: "Squirtle",
      image: require("./assets/squirtle.png"),
      type: "Water",
      hp: 44,
      moves: ["Tackle", "Water Gun", "Tail whip", "Withdraw"],
      weaknesses: ["Electric", "Grass"],
    },
    {
      name: "Bulbasaur",
      image: require("./assets/bulbasaur.png"),
      type: "Grass",
      hp: 45,
      moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
      weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    },
    {
      name: "Pikachu",
      image: require("./assets/pikachu.png"),
      type: "Electric",
      hp: 49,
      moves: ["Scratch", "Ember", "Growl", "Leer"],
      weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    },
  ];

  return (
    // <RnList />
    <SectionListComp />
    // <SafeAreaView style={styles.container}>
    //   <ScrollView>
    //     {data.map((item) => (
    //       <PokemanCard key={item.name} {...item} />
    //     ))}
    //   </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS == "android" ? 25 : 0,
  },
});
