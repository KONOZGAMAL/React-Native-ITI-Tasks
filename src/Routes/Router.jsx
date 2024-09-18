import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Screen/Home/Home";
import TaskDay2 from "../Screen/Day2/TaskDay2"
import TaskDay3 from "../Screen/Day3/TaskDay3"
import TaskDay5 from "../Screen/Day5/Users/Users"
import palette from "../Screen/Day4/palette/Palette"
import routes from "../Common/routes";
import UserDetails from "../Screen/Day5/UserDetails/UserDetails";
import PaletteDetails from "../Screen/Day4/PaletteDetails/PaletteDetails";

const root = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.home} component={Home} />
      <Stack.Screen name={routes.day2} component={TaskDay2} />
      <Stack.Screen name={routes.day3} component={TaskDay3} />
      <Stack.Screen name={routes.day4} component={palette} />
      <Stack.Screen name={routes.day5} component={TaskDay5} />
      <Stack.Screen name={routes.userDetails} component={UserDetails} />
      <Stack.Screen name={routes.PaletteDetails} component={PaletteDetails} />
    </Stack.Navigator>
  );
};

export default root;