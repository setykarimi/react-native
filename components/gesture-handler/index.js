import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import DashboardScreen from "../../screens/dashboard-screen";
import SettingScreen from "../../screens/setting-screen";

const Drawer = createDrawerNavigator();

export default function GestureHandler() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: "My dashboard",
            drawerLabel: "Dashboard label",
            drawerActiveTintColor: "#333",
            drawerActiveBackgroundColor: 'lightblue',
            drawerContentStyle:{
                backgroundColor: "#c6cbef"
            }
          }}
        />
        <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
