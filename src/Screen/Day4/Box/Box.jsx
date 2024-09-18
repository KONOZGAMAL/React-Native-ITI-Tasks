import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Box({ title, bgColor }) {
  return (
    <View style={[styles.box, { backgroundColor: bgColor }]}>
      <Text style={styles.tex}>
        {title} : {bgColor}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    color: "white",
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginVertical: 10,
    borderRadius: 5,
  },
  tex: {
    color: "white",
    textAlign: "center",
  },
});
