import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> App Works Great </Text>
        <TextInput placeholder="Enter Something" placeholderTextColor="gray" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});
