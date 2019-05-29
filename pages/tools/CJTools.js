import React from "react";
import { View, Text, Button } from "react-native";
import BaiduMobStat from "baidumobstat-react-native";
import { NavigationEvents } from 'react-navigation';

export default class Home extends React.Component {
  static navigationOptions = {
    title: '百宝箱',
  };

  willFocus() {
    console.log('onwillFocus');
    BaiduMobStat.onPageStart('百宝箱');
  }

  willBlur() {
    console.log('onWillBlur');
    BaiduMobStat.onPageEnd('百宝箱');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <NavigationEvents
          onWillFocus={this.willFocus}
          onWillBlur={this.willBlur}
        />
        <Text>Tools Screen</Text>
        <Button
          title="push"
          onPress={() => this.props.navigation.navigate("Camera")}
        />
      </View>
    );
  }
}
