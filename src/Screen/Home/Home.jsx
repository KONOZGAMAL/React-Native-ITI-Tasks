import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import routes from "../../Common/routes";
import { StyleSheet } from "react-native";

const Home = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{ padding: 10, fontSize: 27, fontWeight: "500" }}>
        React Native ITI Taskes
      </Text>

      <View style={styles.contant}>
        <View style={styles.items}>
          <TouchableOpacity
            style={[styles.item, { backgroundColor: "#073642" }]}
            onPress={() => navigate(routes.day2)}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Task Day 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.item, { backgroundColor: "#657b83" }]}
            onPress={() => navigate(routes.day3)}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Task Day 3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.items}>
          <TouchableOpacity
            style={[styles.item, { backgroundColor: "#b58900" }]}
            onPress={() => navigate(routes.day4)}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Task Day 4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.item, { backgroundColor: "#6c71c4" }]}
            onPress={() => navigate(routes.day5)}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Task Day 5</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  contant: {
    padding: 5,
    marginTop: 30,
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
    marginBottom: 5,
  },
  item: {
    width: "49%",
    paddingVertical: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
