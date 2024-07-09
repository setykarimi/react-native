import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import CourseListScreen from "../../screens/course-list-screen";
import ProfileScreen from "../../screens/profile-screen";
import SettingScreen from "../../screens/setting-screen";
import Ionicons from '@expo/vector-icons/Ionicons'
import RnNavigation, { AboutStack } from "../rn-navigation";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarLabelPosition: 'below-icon',
        tabBarShowLabel: true,
        tabBarActiveTintColor:'purple',
        tabBarInactiveTintColor: '#000',
      }}>
        <Tab.Screen name="Course list" component={CourseListScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: "my profile",
          tabBarIcon: ({color})=> <Ionicons name="person" size={20} color={color}/>,
          tabBarBadge: 2
        }}/>
        <Tab.Screen name="Settings" component={SettingScreen} />
        <Tab.Screen name="about" component={AboutStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
