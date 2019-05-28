import React from "react";
import { View, Text, Button } from "react-native";

export default class Home extends React.Component {
  static navigationOptions = {
    title: '首页',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="push"
          onPress={() => this.props.navigation.navigate("Camera")}
        />
      </View>
    );
  }
}
