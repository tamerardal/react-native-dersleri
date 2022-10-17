import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
<<<<<<< HEAD
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from "./src/screens/ListScreen";
import CounterScreen from "./src/screens/CounterScreen";
import SquareScreen from "./src/screens/SquareScreen";
import ReducerSquareScreen from "./src/screens/ReducerSquareScreen";
import { TextScreen } from "./src/screens/TextScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components : ComponentScreen,
    List : ListScreen,
    Counter: CounterScreen,
    Square:SquareScreen,
    RSquare: ReducerSquareScreen,
    Text: TextScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
=======
import CardScreen from "./src/screens/CardScreen";

const navigator = createStackNavigator(
  {
    Card: CardScreen,
  },
  {
    initialRouteName: "Card",
    defaultNavigationOptions: {
      headerShown: false,
>>>>>>> e59ab03e86154dd4b9c1030fa5b611f5721f7990
    },
  }
);

export default createAppContainer(navigator);
