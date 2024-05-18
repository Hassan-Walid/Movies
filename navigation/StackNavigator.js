import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import MovieDetails from "../components/MovieDetails/movieDetails";
import DrawerNavigation from "./DrawerNavigation";
import TabNavigation from "./TabNavigation";
import seaMore from "../components/Movies/seaMore";
import SeaMore from "../components/Movies/seaMore";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="drawer"
        component={DrawerNavigation}
        options={{
          header: () => null,
        }}
      ></Stack.Screen> */}
      {/* <Stack.Screen name="Home" component={Home} /> */}

      <Stack.Screen
        name="tab"
        component={TabNavigation}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="details"
        component={MovieDetails}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="seaMore"
        component={SeaMore}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default StackNavigator;
