import { StyleSheet, Text, View , FlatList } from "react-native";
import React from "react";
import TaskOne from "./taskOne";

const TaskDay2 = () => {
  const COLORS = [
    { colorName: "Base03", hexCode: "#002b36" },
    { colorName: "Base02", hexCode: "#073642" },
    { colorName: "Base01", hexCode: "#586e75" },
    { colorName: "Base00", hexCode: "#657b83" },
    { colorName: "Base0", hexCode: "#839496" },
    { colorName: "Base1", hexCode: "#93a1a1" },
    { colorName: "Base2", hexCode: "#eee8d5" },
    { colorName: "Yellow", hexCode: "#b58900" },
    { colorName: "Orange", hexCode: "#cb4b16" },
    { colorName: "Red", hexCode: "#dc322f" },
    { colorName: "Magenta", hexCode: "#d33682" },
    { colorName: "Violet", hexCode: "#6c71c4" },
    { colorName: "Blue", hexCode: "#268bd2" },
    { colorName: "Cyan", hexCode: "#2aa198" },
    { colorName: "Green", hexCode: "#859900" },
    { colorName: "Purple", hexCode: "#800080" },
    { colorName: "Pink", hexCode: "#ffc0cb" },
    { colorName: "Brown", hexCode: "#a52a2a" },
    { colorName: "Silver", hexCode: "#c0c0c0" },
    { colorName: "Gold", hexCode: "#ffd700" },
  ];
  return (
    <View style={styles.containe}>
      <FlatList
        data={COLORS}
        renderItem={({ item }) => (
          <TaskOne title={item.colorName} bgColor={item.hexCode} />
        )}
        keyExtractor={(item) => item.colorName}
        ListHeaderComponent={
          <Text style={styles.text}>
            {" "}
            Here are some boxes with color names{" "}
          </Text>
        }
      />
    </View>
  );
};


const styles = StyleSheet.create({
  containe: {
    marginTop: 50,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
});

export default TaskDay2;
