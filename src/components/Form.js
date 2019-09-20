import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';


export default class Login extends Component<{}> {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        }
    }

    saveData =async()=>{
        const {email,password} = this.state;
 
        //save data with asyncstorage
        let loginDetails={
            email: email,
            password: password
        }
 
        if(this.props.type !== 'Login')
        {
            AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));
 
            Keyboard.dismiss();
            alert("You successfully registered. Email: " + email + ' password: ' + password);
            this.login();
        }
        else if(this.props.type == 'Login')
        {
            try{
                let loginDetails = await AsyncStorage.getItem('loginDetails');
                let ld = JSON.parse(loginDetails);
 
                if (ld.email != null && ld.password != null)
                {
                    if (ld.email == email && ld.password == password)
                    {
                        alert('Go in!');
                    }
                    else
                    {
                        alert('Email and Password does not exist!');
                    }
                }
 
            }catch(error)
            {
                alert(error);
            }
        }
    }
    login = () =>{
        
    }
 
    showData = async()=>{
        let loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);
        alert('email: '+ ld.email + ' ' + 'password: ' + ld.password);
    }
 

    render(){

    return(
            <View style={styles.container}> 
                <TextInput 
                style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder='Enter email address'
                placeholderTextColor='#ffffff' 
                onChangeText={(email)=> this.setState({email})}
                keyboardType='email-address'
                onSubmitEditing={()=> this.password.focus()}
                />
                <TextInput 
                style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder='Enter Password'
                secureTextEntry={true}
                placeholderTextColor='#ffffff'
                onChangeText={(password)=> this.setState({password})}
                ref={(input) => this.password = input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.saveData}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#455a64',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBox : {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10
    },
    button : {
        marginVertical: 10,
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        paddingHorizontal: 12
    },

    buttonText : {
        marginVertical: 10,
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'

    }
});