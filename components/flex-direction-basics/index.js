import { useState } from "react";
import { StyleSheet, View } from "react-native";
import PreviewLayout from "./preview-layout";

const FlexDirectionBasics = () => {
  const [flexDirection, setFlexDirection] = useState("column");
  return (
    <PreviewLayout
      label="flexDirection"
      values={["column", "row", "row-reverse", "coumn-reverse"]}
      selectedValue={flexDirection}
      setSelectedValue={setFlexDirection}
    >
      <View style={[styles.box, { backgroundColor: "powderblue" }]}></View>
      <View style={[styles.box, { backgroundColor: "skyblue" }]}></View>
      <View style={[styles.box, { backgroundColor: "steelblue" }]}></View>
    </PreviewLayout>
  );
};

export default FlexDirectionBasics;

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
});
