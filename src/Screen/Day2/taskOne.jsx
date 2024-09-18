import { View, Text} from "react-native";
import React from "react";
import styles from "./StyleOne";

const TaskOne = ({ title, bgColor }) => {
  return (
    <View style={[styles.box, { backgroundColor: bgColor }]}>
      <Text style={styles.tex}>
        {title} : {bgColor}
      </Text>
    </View>
  );
};

export default TaskOne;
