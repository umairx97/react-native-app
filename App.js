import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Constants } from "expo";

// You can import from local files
import Login from "./components/Login";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  }
});
