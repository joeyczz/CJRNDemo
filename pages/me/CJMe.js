import React from "react";
import { View, Text, Button } from "react-native";

export default class Home extends React.Component {
  static navigationOptions = {
    title: '我的',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Me Screen</Text>
        <Button
          title="push"
          onPress={() => this.props.navigation.push("Login")}
        />
      </View>
    );
  }
}
