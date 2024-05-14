import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { ButtonGroup, Avatar, Button } from "@rneui/themed";
import Splash from "./components/SplashScreen/splash";
import Moives from "./components/Movies/moives";
import Movie from "./components/Movies/movie";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./navigation/DrawerNavigation";

export default function App() {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);
  return (
    <>
      <StatusBar style="light" />
      {splash ? (
        <Splash />
      ) : (
        <NavigationContainer>
          <DrawerNavigation></DrawerNavigation>
        </NavigationContainer>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 10,
  },
});
