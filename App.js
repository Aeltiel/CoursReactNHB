import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Pages/Home";
import NewPage from "./Pages/NewPage";
import { NavigationContainer } from "@react-navigation/native";

const Navig = createStackNavigator();
const Navigator = () => (
  <Navig.Navigator>
    <Navig.Screen name="Home" component={Home} />
    <Navig.Screen name="NewPage" component={NewPage} />
  </Navig.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
