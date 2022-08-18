import React from "react";
import { 
    View, 
    StyleSheet, 
    Text, 
    StatusBar,
    TouchableOpacity,
    
    
} from 'react-native'

import Icon from 'react-native-vector-icons/Feather';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64; 

export default function Header( {name} ){
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>{name}</Text>
                <TouchableOpacity activeOpacity={0.8} style={styles.buttonUser}>
                    <Icon name="user" size={27} color="#000000" />
                </TouchableOpacity>  
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#8000ff",
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },

    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    username:{
        fontSize: 22,
        color: '#FFF',
        fontWeight: 'bold',
    },

    buttonUser:{
        width: 50,
        height: 50,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    }

})