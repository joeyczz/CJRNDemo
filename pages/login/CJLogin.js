import React from "react";
import { View, Text, Button } from "react-native";
import BaiduMobStat from "baidumobstat-react-native";

export default class Home extends React.Component {

  static navigationOptions = {
    title: '登录',
  };

  componentWillMount() {
    console.log('componentWillMount')
    BaiduMobStat.onPageStart('登录');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    BaiduMobStat.onPageEnd('登录');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Login Screen</Text>
        <Button
          title="push"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}
