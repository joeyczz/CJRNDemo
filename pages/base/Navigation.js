import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
  getActiveChildNavigationOptions
} from "react-navigation";

// import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator.js'
import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';

import AdLaunch from "../adLaunch/CJAdLaunch";
import Home from "../home/CJHome";
import Order from "../order/CJOrder";
import Me from "../me/CJMe";
import Tools from "../tools/CJTools";
import Camera from "../camera/CJCamera";
import Login from "../login/CJLogin";

const HomeTabbar = createStackNavigator(
  {
    Home,
    Camera
  },
  {
    transitionConfig:()=>({
      screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    }),
    navigationOptions: ({ navigation, screenProps }) => ({
      tabBarLabel: "首页",
      ...getActiveChildNavigationOptions(navigation, screenProps)
    })
  }
);

const OrderTabbar = createStackNavigator(
  {
    Order,
    Camera
  },
  {
    transitionConfig:()=>({
      screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    }),
    navigationOptions: ({ navigation, screenProps }) => ({
      tabBarLabel: "接单",
      ...getActiveChildNavigationOptions(navigation, screenProps)
    })
  }
);

const ToolsTabbar = createStackNavigator(
  {
    Tools,
    Camera
  },
  {
    transitionConfig:()=>({
      screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    }),
    navigationOptions: ({ navigation, screenProps }) => ({
      tabBarLabel: "百宝箱",
      ...getActiveChildNavigationOptions(navigation, screenProps)
    })
  }
);

const MeTabbar = createStackNavigator(
  {
    Me,
    Login
  },
  {
    transitionConfig:()=>({
      screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    }),
    navigationOptions: ({ navigation, screenProps }) => ({
      tabBarLabel: "我的",
      // tabBarVisible: false,
      ...getActiveChildNavigationOptions(navigation, screenProps)
    })
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    HomeTabbar,
    OrderTabbar,
    ToolsTabbar,
    MeTabbar
  },
  {
    tabBarOptions: {
      activeTintColor: '#36394D',
      inactiveTintColor: 'gray',
    },
  }
);

const AppNavigator = createSwitchNavigator({
  AdLaunch,
  Tabbar: TabNavigator
});

const Navigation = createAppContainer(AppNavigator);

export default Navigation;
