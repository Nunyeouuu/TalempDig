import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Mainmenu from "../code/Mainmenu";
import Ingame from "../code/Ingame";

const { Navigator, Screen } = createStackNavigator ();

const MMscreen = () => (
        <NavigationContainer>
            <Navigator headerMode="none" initialRouteName="Mainmenu">
                <Screen name="Mainmenu" component={Mainmenu}/>
                <Screen name="Ingame" component={Ingame}/>
            </Navigator>
        </NavigationContainer>
);

export default MMscreen;
