import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import IAmRichScreen from "./src/screens/IAmRichScreen";
import IAmPoorScreen from "./src/screens/IAmPoorScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    ListScreen: ListScreen,
    IAmRichScreen: IAmRichScreen,
    IAmPoorScreen: IAmPoorScreen,
  },
  {
    initialRouteName: "IAmPoorScreen",
    defaultNavigationOptions: {
      title: "Sefalet Köpek",
    },
  }
);

export default createAppContainer(navigator);
