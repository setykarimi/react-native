// import { StyleSheet, View } from "react-native";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

export default function App() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  // const [dimensions, setDimensions] = useState({
  //   window: Dimensions.get("window"),
  // });

  // useEffect(() => {
  //   const subsription = Dimensions.addEventListener("change", ({ window }) => {
  //     setDimensions({ window });
  //   });
  //   return () => subsription?.remove();
  // });

  // const { window } = dimensions;

  // const windowWidth = window.width;
  // const windowHeight = window.height;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? "70%" : "90%",
            height: windowHeight > 600 ? "60%" : "90%",
          },
        ]}
      >
        <Text
          style={{
            fontSize: windowWidth > 500 ? 50 : 24,
          }}
        >
          Welcome!
        </Text>
      </View>
      {/* <Box style={{ padding: 15, backgroundColor: "#225544" }} >Box 1 shrink</Box>
      <Box style={{ padding: 15, backgroundColor: "#227766" }} >Box 2 shrink</Box>
      <Box style={{ padding: 15, backgroundColor: "#224433" }} >Box 3</Box>
      <Box style={{ padding: 15, backgroundColor: "#225555" }} >Box 4</Box>
      <Box style={{ padding: 15, backgroundColor: "#225544" }} >Box 5</Box>
      <Box style={{ padding: 15, backgroundColor: "#227766" }} >Box 6</Box>
      <Box style={{ padding: 15, backgroundColor: "#224433" }} >Box 7</Box>
      <Box style={{ padding: 15, backgroundColor: "#225555" }} >Box 8</Box> */}
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
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 600 ? "60%" : "90%",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  // text: {
  //   fontSize: windowWidth > 500 ? 50 : 24,
  // },
});
