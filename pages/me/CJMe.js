import React from "react";
import { View, Text, Button } from "react-native";
import BaiduMobStat from "baidumobstat-react-native";
import { NavigationEvents } from 'react-navigation';

export default class Home extends React.Component {

  static navigationOptions = {
    title: '我的',
  };

  willFocus() {
    console.log('onwillFocus');
    BaiduMobStat.onPageStart('我的');
  }

  willBlur() {
    console.log('onWillBlur');
    BaiduMobStat.onPageEnd('我的');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <NavigationEvents
          onWillFocus={this.willFocus}
          onWillBlur={this.willBlur}
        />
        <Text>Me Screen</Text>
        <Button
          title="push"
          onPress={() => this.props.navigation.push("Login")}
        />
      </View>
    );
  }
}
