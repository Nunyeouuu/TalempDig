import React from "react";
import { View, Text, Button, StyleSheet,  } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SFX } from '../src/utils/constants';

interface MainmenuProps {
    navigation: any;
}

const Mainmenu = (props: MainmenuProps) => {
    const start = () => props.navigation.navigate("Ingame") 

    return(
        <>
            <View style={styles.container}> 
                <TouchableOpacity style={styles.startbutton} onPress={start}>
                    <View>
                        <Text style={{textAlign:'center', marginVertical:30, fontWeight:'bold' }}>Start</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionbutton}>
                    <View>
                        <Text style={{textAlign:'center', marginVertical:30, fontWeight:'bold' }} >Option</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: "column",
        alignItems: 'center',
    },
    startbutton: {
        backgroundColor: 'green',
        width: 200,
        height: 80,
        textAlign: 'center',
        marginVertical: 10,
        borderRadius: 20,
        elevation: 10
    },
    optionbutton: {
        backgroundColor: 'green',
        width: 200,
        height: 80,
        textAlign: 'center',
        marginVertical: 10,
        borderRadius: 20,
        elevation: 10
    },
});

export default Mainmenu;