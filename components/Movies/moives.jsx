import React, { useState } from "react";
import { StyleSheet, View, ScrollView, TextInput } from "react-native";
import Movie from "./movie";
import { Button, CheckBox } from "@rneui/themed";
import { Dialog } from "./../../node_modules/@rneui/base/dist/Dialog/index";
import { color } from "@rneui/base";

const Moives = () => {
  const [visible5, setVisible5] = useState(false);
  const [checked, setChecked] = useState(1);
  const toggleDialog5 = () => {
    setVisible5(!visible5);
  };
  return (
    <>
      <View style={styles.section}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={"wheat"}
          style={styles.inputSearch}
        />
        <Button
          onPress={toggleDialog5}
          title="Filter ∇"
          buttonStyle={{
            backgroundColor: "black",
            borderWidth: 2,
            borderColor: "red",
            borderRadius: 15,
          }}
          containerStyle={{
            padding: 5,
            marginTop: 16,
            // width: 200,
            // marginHorizontal: 50,
            // marginVertical: 10,
          }}
          titleStyle={{ fontWeight: "bold", color: "wheat" }}
        />
        <Dialog isVisible={visible5} onBackdropPress={toggleDialog5}>
          <Dialog.Title title="Select Preference" />
          {["Option 1", "Option 2", "Option 3"].map((l, i) => (
            <CheckBox
              key={i}
              title={l}
              containerStyle={{
                backgroundColor: "black",
              }}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={checked === i + 1}
              onPress={() => setChecked(i + 1)}
            />
          ))}

          <Dialog.Actions>
            {/* <Dialog.Button
              title="CONFIRM"
              onPress={() => {
                console.log(`Option ${checked} was selected!`);
                toggleDialog5();
              }}
            /> */}
            {/* <Dialog.Button title="CANCEL" onPress={toggleDialog5} /> */}
          </Dialog.Actions>
        </Dialog>
      </View>
      <ScrollView>
        <Movie></Movie>
        <Movie></Movie>
        <Movie></Movie>
        <Movie></Movie>
        <Movie></Movie>
        <Movie></Movie>
        <Movie></Movie>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  inputSearch: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    width: "70%",
    marginHorizontal: 8,
    borderBottomColor: "wheat",
    borderWidth: 3,
    color: "red",
    fontSize: 18,
  },
  section: {
    flexDirection: "row",
  },
});

export default Moives;
