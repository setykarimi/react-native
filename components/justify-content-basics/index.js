import { useState } from "react";
import { StyleSheet, View } from "react-native";
import PreviewLayout from "../flex-direction-basics/preview-layout";

const JustifyContentBasics = () => {
  const [justifyContent, setJustifyContent] = useState("flex-start");

  return (
    <PreviewLayout
      label="justifyContent"
      selectedValue={justifyContent}
      setSelectedValue={setJustifyContent}
      values={["flex-start", "flex-end", "center", "space-between","space-around", "space-evenly"]}
    >
      <View style={[styles.box, { backgroundColor: "powderblue" }]}></View>
      <View style={[styles.box, { backgroundColor: "skyblue" }]}></View>
      <View style={[styles.box, { backgroundColor: "steelblue" }]}></View>
    </PreviewLayout>
  );
};

export default JustifyContentBasics

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
});
