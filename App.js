import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Splash from "./components/SplashScreen/splash";

import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./navigation/DrawerNavigation";
import { Provider } from "react-redux";
import store from "./redux/store";
import StackNavigator from "./navigation/StackNavigator";
import Home from "./components/home/home";

export default function App() {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);
  return (
    <>
      {/* <Provider store={store}>
        <Home></Home>
      </Provider> */}

      <StatusBar style="light" />
      {splash ? (
        <Splash />
      ) : (
        <Provider store={store}>
          <NavigationContainer>
            <View style={styles.container}>
              <StackNavigator></StackNavigator>
            </View>
          </NavigationContainer>
        </Provider>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 30,
  },
});
