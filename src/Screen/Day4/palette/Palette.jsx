import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { solarizedColors, twitterColors , facebookColors , youtubeColors} from "../common/colors";
import { useNavigation } from "@react-navigation/native";
import routes from "../../../Common/routes";

const Palette = () => {
  const { navigate } = useNavigation();
  const schemeList = [
    {
      scheme: twitterColors,
      title: "Twitter Colors",
    },
    {
      scheme: facebookColors,
      title: "Facebook Colors",
    },
    {
      scheme: youtubeColors,
      title: "Youtube Colors",
    },
    {
      scheme: solarizedColors,
      title: "Solarized Colors",
    },
  ];
  return (
    <View style={styles.cotainerStyle}>
      {schemeList.map(({ scheme, title }) => (
        <Pressable
          key={title}
          onPress={() =>
            navigate(routes.PaletteDetails, { name: title, colors: scheme })
          }
          style={[
            styles.itemContainer,
            {
              backgroundColor: scheme[3].hexCode,
            },
          ]}
        >
          <Text style={styles.titleStyle}>{title}</Text>
          <View style={styles.colorsContainer}>
            {scheme.slice(0, 3).map(({ colorName, hexCode }) => (
              <View
                style={[styles.colorItem, { backgroundColor: hexCode }]}
                key={hexCode}
              />
            ))}
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cotainerStyle: {
    padding: 20,
    flex: 1,
    backgroundColor: "white",
  },
  colorItem: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 3,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    marginBottom: 15,
  },
  colorsContainer: {
    flexDirection: "row",
  },
  titleStyle: {
    fontSize: 18,
    color: "white",
  },
});

export default Palette;
