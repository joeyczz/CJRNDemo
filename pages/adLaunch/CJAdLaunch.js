import React from "react";
import { View, Text, Button } from "react-native";
import BaiduMobStat from "baidumobstat-react-native";

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      timecount: 5
    };
  }

  componentWillMount() {
    this.start();
    BaiduMobStat.onPageStart('广告');
  }

  componentWillUnmount() {
    BaiduMobStat.onPageEnd('广告');
    clearTimeout(this.timer);
  }

  start() {
    this.timer = setTimeout(() => {
      this.setState(preState => ({
        timecount: preState.timecount - 1
      }));

      if (this.state.timecount <= 0) {
        this.go();
      } else {
        this.start();
      }
    }, 1000);
  }

  go() {
    this.props.navigation.navigate("Tabbar");
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>AD Screen</Text>
        <Text>{this.state.timecount}</Text>
        <Button title="GO" onPress={() => this.go()} />
      </View>
    );
  }
}
