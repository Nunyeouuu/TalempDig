import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Mainmenu from "../code/Mainmenu";
import Ingame from "../code/Ingame";
import Splashscreen from "../code/splashscreen";

const { Navigator, Screen } = createStackNavigator ();

const MMscreen = () => (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}} initialRouteName="Mainmenu">
                <Screen name="Mainmenu" component={Mainmenu}/>
                <Screen name="Ingame" component={Ingame}/>
            </Navigator>
        </NavigationContainer>
);


export default MMscreen;
