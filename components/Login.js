import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";


import {Button, Card} from 'react-native-elements'
export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
    uerror: "",
    perror: "",
    affirmation: ""
  };

  handleSubmit = () => {
    const { username, password, uerror, perror } = this.state;

    if (username.length < 3) {
      this.setState({
        uerror: "The username must be bigger than 3 characters"
      });
    } else {
      this.setState({
        uerror: ""
      });
    }

    if (password.length < 3) {
      this.setState({
        uerror: "The password must be greater than 3 "
      });
    } else {
      this.setState({
        perror: ""
      });
    }

    if (!uerror && !perror) {
      this.setState({
        affirmation: "Everything is Okay"
      });
    }
  };
  render() {
    return (
      <View>

        <Card>
        <ScrollView style={{ padding: 20 }}>
          <Text style={{ fontSize: 27 }}>Login</Text>

          <TextInput
            placeholder="Username"
            name="username"
            
            onChangeText={username => this.setState({ username })}
          />
          <TextInput
            placeholder="Password"
            name="password"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
          <View style={{ margin: 7 }} />
          <Button onPress={this.handleSubmit} title="Sign In"  />

          <Text style={styles.textStyling}>{this.state.uerror}</Text>
          <Text style={styles.textStyling}>{this.state.perror}</Text>
          {!this.state.uerror && !this.state.perror && (
            <Text style={{ color: "green", textAlign: "center" }}>
              {this.state.affirmation}
            </Text>
          )}
    
        </ScrollView>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyling: {
    color: "red",
    textAlign: "center"
  }
});
