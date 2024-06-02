import { useState } from "react";
import { StyleSheet, View } from "react-native";
import PreviewLayout from "../flex-direction-basics/preview-layout";

const AlignContentBasics = () => {
  const [alignContent, setAlignContent] = useState("flex-start");

  return (
    <PreviewLayout
      label="alignContent"
      selectedValue={alignContent}
      values={[
        "flex-start",
        "flex-end",
        "stretch",
        "center",
        "space-between",
        "space-around",
      ]}
      setSelectedValue={setAlignContent}
    >
      <View style={[styles.box, { backgroundColor: "orangered" }]} />
      <View style={[styles.box, { backgroundColor: "orange" }]} />
      <View style={[styles.box, { backgroundColor: "mediumseagreen" }]} />
      <View style={[styles.box, { backgroundColor: "deepskyblue" }]} />
      <View style={[styles.box, { backgroundColor: "mediumturquoise" }]} />
      <View style={[styles.box, { backgroundColor: "mediumslateblue" }]} />
      <View style={[styles.box, { backgroundColor: "purple" }]} />
    </PreviewLayout>
  );
};

export default AlignContentBasics;

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 80,
  },
});
