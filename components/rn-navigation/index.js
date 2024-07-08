import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Pressable, Text } from "react-native";
import AboutScreen from "../../screens/about-screen";
import HomeScreen from "../../screens/home-screen";

const Stack = createNativeStackNavigator();

export default function RnNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6a51ae",
          },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerRight: () => (
            <Pressable onPress={() => alert("menu button pressed!")}>
              <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: "#e8e4f3",
          },
        }}
      >
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: "Welcome Home",
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{
            name: "Hety",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
