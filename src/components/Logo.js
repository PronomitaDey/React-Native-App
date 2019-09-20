import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Logo extends Component<{}> {
    render(){
        return(
            <View style={styles.container}>
                <Image
                style={{width: 50, height: 50}}
                source={require('../images/printer-icon.png')}/>
                <Text style={styles.ImageStyle}>
                    Seamless Printing
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    ImageStyle : {
        marginVertical: 15,
        flex: 1,
        fontSize: 20,
        color: 'rgba(255,255,255,0.7),'

    }
})