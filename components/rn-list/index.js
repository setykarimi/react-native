import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import pokemanList from "../../data.json";
import SafeArea from "../safe-area";

export default function PokemanList() {
  return (
    <SafeArea style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {pokemanList.map((pokeman) => {
          return (
            <View key={pokeman.id} style={styles.card}>
              <Text style={styles.cardText}>{pokeman.type}</Text>
              <Text>{pokeman.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 16
  },
  cardText: {
    fontSize: 30
  }
});
