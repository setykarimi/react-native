import { useState } from "react";
import { StyleSheet, View } from "react-native";
import PreviewLayout from "../flex-direction-basics/preview-layout";

const DirectionLayout = () => {
  const [direction, setDirection] = useState("ltr");
  return (
    <PreviewLayout
      label="direction"
      selectedValue={direction}
      values={["ltr", "rtl"]}
      setSelectedValue={setDirection}
    >
      <View style={[styles.box, { backgroundColor: "powderblue" }]}></View>
      <View style={[styles.box, { backgroundColor: "skyblue" }]}></View>
      <View style={[styles.box, { backgroundColor: "steelblue" }]}></View>
    </PreviewLayout>
  );
};

export default DirectionLayout;

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
});
