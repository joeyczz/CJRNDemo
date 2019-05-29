import React from "react";
import { View, Text, Button } from "react-native";
import BaiduMobStat from "baidumobstat-react-native";
import { NavigationEvents } from 'react-navigation';

const getRandom = () => Math.random() * 10;
export default class Home extends React.Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     random: getRandom();
  //   };
  // }

  static navigationOptions = {
    title: "接单"
  };
  // navigationOptions = {
  //   title: this.state.random > 5 ? "接单" : 'haha'
  // };

  willFocus() {
    console.log('onwillFocus');
    BaiduMobStat.onPageStart('接单');
  }

  willBlur() {
    console.log('onWillBlur');
    BaiduMobStat.onPageEnd('接单');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <NavigationEvents
          onWillFocus={this.willFocus}
          onWillBlur={this.willBlur}
        />
        <Text>Order Screen</Text>
        <Button
          title="push"
          onPress={() => this.props.navigation.navigate("Camera")}
        />
      </View>
    );
  }
}
