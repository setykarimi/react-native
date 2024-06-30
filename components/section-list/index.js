import React from "react";
import {
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import groupedData from "../../grouped-data.json";

export default function SectionListComp() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <SectionList
          sections={groupedData}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeaderText}>{section.type}</Text>
          )}
          ItemSeparatorComponent={()=> <View style={{height: 16}}/>}
          SectionSeparatorComponent={()=> <View style={{height: 24}}/>}
        />
      </ScrollView>
    </SafeAreaView>
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
    borderRadius: 8,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 16,
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "800",
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  sectionHeaderText: {
    fontSize: 28,
    marginTop: 12,
    fontWeight: "800",
    textAlign: 'center'
  }
});
