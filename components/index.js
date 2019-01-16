import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class index extends Component {
  signUp = () => {
    console.log("sign up");
  };
  login = () => {
    console.log("log in");
  };
  render() {
    return (
      <React.Fragment>
        <View>
          <Text style={styles.headerText}>Welcome to meanwhile</Text>
          <Button
            onPress={this.signUp}
            title="Login"
            color="#4CAF50"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={this.login}
            title="Sign Up"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </React.Fragment>
    );
  }
}

export default index;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    textAlign: "center",
    margin: 10
  }
});
