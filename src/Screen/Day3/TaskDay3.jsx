import { View, Text, SectionList, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import MainContant from "./MainContant";

const TaskDay3 = () => {
  const sections = [
    {
      id: 1,
      title: "A",
      data: [
        { id: "10", text: "Amire gamal", color: "#586e75" },
        { id: "11", text: "Ali ahmed", color: "#586e75" },
        { id: "12", text: "Asmaa ali", color: "#586e75" },
        { id: "13", text: "Alaa hamed", color: "#586e75" },
        { id: "14", text: "Ahmed", color: "#586e75" },
        { id: "15", text: "Aylol", color: "#586e75" },
      ],
    },
    {
      id: 2,
      title: "B",
      data: [{ id: "16", text: "Bala", color: "#b58900" }],
    },
    {
      id: 3,
      title: "D",
      data: [
        { id: "16", text: "dady", color: "#6c71c4" },
        { id: "17", text: "Diaa", color: "#6c71c4" },
      ],
    },
    {
      id: 4,
      title: "E",
      data: [
        { id: "10", text: "Eng ali", color: "#c0c0c0" },
        { id: "11", text: "Esraa", color: "#c0c0c0" },
        { id: "12", text: "Ezssee", color: "#c0c0c0" },
        { id: "13", text: "Eaqwee", color: "#c0c0c0" },
        { id: "14", text: "Eqwee", color: "#c0c0c0" },
        { id: "15", text: "Eplkj", color: "#c0c0c0" },
      ],
    },
  ];

  const totalItems = sections.reduce(
    (sum, section) => sum + section.data.length,
    0
  );

  return (
    <View style={styles.containerStyle}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => index}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        renderItem={({ item, section }) => (
          <TouchableOpacity style={styles.item} activeOpacity={0.6}>
            <View style={[styles.Suptitle, { backgroundColor: item.color }]}>
              <Text style={{ color: "#fff" }}>{section.title}</Text>
            </View>
            <Text style={styles.title}>{item.text}</Text>
          </TouchableOpacity>
        )}
        ListHeaderComponent={
          <View>
            <MainContant counter={totalItems} />
            <Text style={styles.profile}>My Profile</Text>
          </View>
        }
      />
    </View>
  );
};

export default TaskDay3;
