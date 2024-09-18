import { View, Text, StyleSheet , FlatList} from "react-native";
import React from "react";
import Box from "../Box/Box";

const PaletteDetails = ({ route }) => {
  const { name, colors } = route.params;

  return (
    <View style={styles.containe}>
      <FlatList
        data={colors}
        renderItem={({ item }) => (
          <Box title={item.colorName} bgColor={item.hexCode} />
        )}
        keyExtractor={(item) => item.colorName}
        ListHeaderComponent={<Text style={styles.text}>{name}</Text>}
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

export default PaletteDetails;
