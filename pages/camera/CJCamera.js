import React, { Component } from "react";
import { StyleSheet, Animated, View, Text, Easing } from "react-native";
import { RNCamera } from "react-native-camera";

export default class Camera extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moveAnim: new Animated.Value(-200)
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation() {
    this.state.moveAnim.setValue(-200);
    Animated.timing(this.state.moveAnim, {
      toValue: 0,
      duration: 1500,
      easing: Easing.linear
    }).start(() => this.startAnimation());
  }

  //  识别二维码
  onBarCodeRead = result => {
    const { navigate } = this.props.navigation;
    const { data } = result;
    alert(JSON.stringify(data));
    navigate("Sale", {
      url: data
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          onBarCodeRead={this.onBarCodeRead}
        >
          <View style={styles.rectangleContainer}>
            <View style={styles.rectangle} />
            <Animated.View
              style={[
                styles.border,
                { transform: [{ translateY: this.state.moveAnim }] }
              ]}
            />
            <Text style={styles.rectangleText}>
              将二维码放入框内，即可自动扫描
            </Text>
          </View>
        </RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  preview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  rectangle: {
    height: 200,
    width: 200,
    borderWidth: 1,
    borderColor: "#cc0000",
    backgroundColor: "transparent"
  },
  rectangleText: {
    flex: 0,
    color: "#fff",
    marginTop: 10
  },
  border: {
    flex: 0,
    width: 200,
    height: 2,
    backgroundColor: "#cc0000"
  }
});
