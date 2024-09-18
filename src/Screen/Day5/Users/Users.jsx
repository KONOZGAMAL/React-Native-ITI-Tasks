import {
  View,
  Text,
  FlatList,
  Pressable,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React from "react";
import useAxios from "axios-hooks";
import routes from "../../../Common/routes";

import Styles from "./style";

const BASED_URL = "https://jsonplaceholder.typicode.com/users";

const Users = ({ navigation }) => {
  const [{ data: user, error, loading }] = useAxios({
    url: BASED_URL,
  });

  if (loading) {
    return (
      <View style={[styles.container, { margin: 20 }]}>
        <ActivityIndicator size="large" color="#2aa198" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, { margin: 20 }]}>
        <Text>Error loading data!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={user}
      renderItem={({ item }) => (
        <View style={Styles.containerStyle}>
          <View>
            <Text style={Styles.containerStyle_1}>
              Name : <Text style={Styles.containerStyle_3}> {item.name}</Text>{" "}
            </Text>
            <Text style={Styles.containerStyle_1}>
              Email : <Text style={Styles.containerStyle_3}> {item.email}</Text>
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate(routes.userDetails, {
                  IdUser: item.id,
                });
              }}
              style={Styles.containerStyle_2}
            >
              <Text
                style={{ color: "#fff", textAlign: "center", fontSize: 18 }}
              >
                More Details
              </Text>
            </Pressable>
          </View>
        </View>
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Users;
