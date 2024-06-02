import { useState } from "react";
import { StyleSheet, View } from "react-native";
import PreviewLayout from "../flex-direction-basics/preview-layout";

const AlignSelfBasics = () => {
  const [alignSelf, setAlignSelf] = useState("stretch");

  return (
    <PreviewLayout
      label="alignSelf"
      selectedValue={alignSelf}
      values={["stretch", "flex-start", "flex-end", "center", "baseline"]}
      setSelectedValue={setAlignSelf}
    >
      <View
        style={[
          styles.box,
          {
            alignSelf,
            width: "auto",
            minWidth: 50,
            backgroundColor: "powderblue",
          },
        ]}
      />
      <View style={[styles.box, { backgroundColor: "skyblue" }]} />
      <View style={[styles.box, { backgroundColor: "steelblue" }]} />
    </PreviewLayout>
  );
};

export default AlignSelfBasics

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
});
