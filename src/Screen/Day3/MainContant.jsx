import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
import Icon from "react-native-vector-icons/EvilIcons";
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Feather";

const MainContant = ({ counter }) => {
  return (
    <View style={styles.container2}>
      <View style={styles.mainContant}>
        <View style={styles.mainContantPartOne}>
          <Text style={styles.mainContantText}>Phone</Text>
          <Text style={styles.mainContantTextP}>
            {counter} contacts with phone numbers
          </Text>
        </View>
        <View style={styles.mainContantPartTwo}>
          <Icon3 name="plus" size={22} color="black" />
          <Icon name="search" size={22} color="black" />
          <Icon2 name="dots-three-vertical" size={20} color="black" />
        </View>
      </View>
    </View>
  );
};

export default MainContant;
