import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import useAxios from "axios-hooks";

const UserDetails = ({ route }) => {
  const { IdUser } = route.params;

  const [{ data: user, error, loading }] = useAxios({
    url: `https://jsonplaceholder.typicode.com/users/${IdUser}`,
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
    <View style={{ margin: 20 }}>
      <View>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 19,
            textAlign: "center",
            padding:12,
          }}
        >
          User : {IdUser}
        </Text>
        <Text>
          <Text style={{ fontWeight: "600", fontSize: 19 }}>Name : </Text>
          {user.name}
        </Text>
        <Text>
          <Text style={{ fontWeight: "600", fontSize: 19 }}>Email : </Text>

          {user.email}
        </Text>
        <Text>
          <Text style={{ fontWeight: "600", fontSize: 19 }}>Address : </Text>

          {user.address.street}
        </Text>
        <Text>
          <Text style={{ fontWeight: "600", fontSize: 19 }}>Phone : </Text>

          {user.phone}
        </Text>
        <Text>
          <Text style={{ fontWeight: "600", fontSize: 19 }}>Website : </Text>
          {user.website}
        </Text>
        <Text style={{ fontWeight: "600", fontSize: 19 }}>Company : </Text>
        <View style={{ margin: 4 }}>
          <Text>Company Name : {user.company.name}</Text>
          <Text>Company catchPhrase : {user.company.catchPhrase}</Text>
          <Text>Company BS: {user.company.bs}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default UserDetails;
