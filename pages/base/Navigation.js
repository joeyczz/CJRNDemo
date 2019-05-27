import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";

import Home from '../home/CJHome';
import Order from '../order/CJOrder';
import Camera from '../camera/CJCamera';

const HomeTabbar = createStackNavigator(
  {
    Home,
    Camera
  }
);

const OrderTabbar = createStackNavigator(
  {
    Order,
    Camera
  }
);

HomeTabbar.navigationOptions = {
  tabBarLabel: 'Home!',
};



const Navigation = createAppContainer(createBottomTabNavigator({
  HomeTabbar,
  OrderTabbar
}));

export default Navigation;
