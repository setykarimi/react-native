// import { StyleSheet, View } from "react-native";
import { StyleSheet, View } from "react-native";
import Box from "./components/box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ padding: 15, backgroundColor: "#225544" }} >Box 1 shrink</Box>
      <Box style={{ padding: 15, backgroundColor: "#227766" }} >Box 2 shrink</Box>
      <Box style={{ padding: 15, backgroundColor: "#224433" }} >Box 3</Box>
      <Box style={{ padding: 15, backgroundColor: "#225555" }} >Box 4</Box>
      <Box style={{ padding: 15, backgroundColor: "#225544" }} >Box 5</Box>
      <Box style={{ padding: 15, backgroundColor: "#227766" }} >Box 6</Box>
      <Box style={{ padding: 15, backgroundColor: "#224433" }} >Box 7</Box>
      <Box style={{ padding: 15, backgroundColor: "#225555" }} >Box 8</Box>
      {/* <Flex /> */}
      {/* <FlexDirectionBasis /> */}
      {/* <DirectionLayout /> */}
      {/* <JustifyContentBasics /> */}
      {/* <AlignItemsBasic /> */}
      {/* <AlignSelfBasics /> */}
      {/* <AlignContentBasics /> */}
      {/* <FlexBasisGrowShrink /> */}
      {/* <PositionLayout /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "red",
  },
});
