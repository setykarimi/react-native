import React from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import pokemanList from "../../data.json";

export default function RnList() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemanList.map((pokeman) => {
          console.log(pokeman.id);
          return (
            <View key={pokeman.id} style={styles.card}>
              <Text style={styles.cardText}>{pokeman.type}</Text>
              <Text>{pokeman.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      <View styles={styles.scrollView}>
        <FlatList
          data={pokemanList}
          renderItem={({ item }) => {
            console.log(item.id);
            return (
              <View key={item.id} style={styles.card}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text>{item.name}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={<View style={{height: 16}}/>}
          // horizontal
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    // StatusBar.currentHeight : this means that the padding does not affect in IOS device
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
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
});
