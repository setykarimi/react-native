import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DashboardScreen from '../../screens/dashboard-screen'
import SettingScreen from '../../screens/setting-screen'

const Drawer = createDrawerNavigator()

export default function GestureHandler(){
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Dashboard" component={DashboardScreen}/>
                <Drawer.Screen name="Setting" component={SettingScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}