import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from './pages/home/CJHome';
import Camera from './pages/camera/CJCamera';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Camera: Camera
  },
  {
    initialRouteName: "Home"
  }
);
const Navigation = createAppContainer(AppNavigator);

export default Navigation;
