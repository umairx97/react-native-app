import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import LoginPage from "./src/components/LoginPage";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Import Components to see different UI's</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
