import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Moives from "../components/Movies/moives";
import Favorites from "../components/favorites/favorites";
import { color } from "@rneui/base";
import Home from "../components/home/home";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
        },
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: 800,
          paddingBottom: 5,
          color: "wheat",
        },
        tabBarShowIcon: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => null,
          // unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name={"My Favorites"}
        component={Favorites}
        options={{ tabBarLabel: "Favorite", tabBarIcon: () => null }}
      />
      <Tab.Screen
        name={"Search"}
        component={Moives}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: () => null,
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TabNavigation;
