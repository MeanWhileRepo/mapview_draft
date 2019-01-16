/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View } from "react-native";
// import Index from "./components/index";
import LocationArea from "./components/locationArea";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "home"
    };
  }
  render() {
    return <LocationArea />;
  }
}
