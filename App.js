import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CardScreen from "./src/screens/CardScreen";

const navigator = createStackNavigator(
  {
    Card: CardScreen,
  },
  {
    initialRouteName: "Card",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
