import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import HomeScreen from "../../screens/home-screen";
import AboutScreen from "../../screens/about-screen";

const Stack = createNativeStackNavigator();

export default function RnNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} initialParams={{
          name: "Hety"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
