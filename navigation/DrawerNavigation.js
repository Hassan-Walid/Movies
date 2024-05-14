import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, View } from "react-native";
import Moives from "./../components/Movies/moives";

import About from "./../components/about/about";
import { color } from "@rneui/base";
import Favorites from "../components/favorites/favorites";

const drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "black",
          width: 200,
        },
        drawerLabelStyle: {
          color: "wheat",
        },
        sceneContainerStyle: {
          backgroundColor: "black",
        },
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "wheat",
      }}
    >
      <drawer.Screen name={"Home"} component={Moives} />
      <drawer.Screen name={"About"} component={About} />
      <drawer.Screen name={"My Favorites"} component={Favorites} />
    </drawer.Navigator>
  );
};
const styles = StyleSheet.create({});

export default DrawerNavigation;
