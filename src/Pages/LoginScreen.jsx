  // import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import {
    StyleSheet, 
    Text, 
    View,
    Image, StatusBar,
    SafeAreaView, 
    // Alert, Platform,  TouchableWithoutFeedback,TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, 
    Button, 
    TextInput
  } from 'react-native';
  import Constans from '../Helpers/Constans';
  
  
  function LoginScreen({loginHandler}) {
    const [userVal, setuserVal] = useState("")
    const [password, setpassword] = useState("")
    function loginButtonClickHandler(){
        loginHandler(true)
    }

    return( <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/G&T/Logo.jpg")}/>
      <Text style={{fontSize:40}}> G&T ARcade  </Text>
      <TextInput style={styles.textBox} placeholder='Usuario' onChangeText={newText => setuserVal(newText)} ></TextInput>
      <TextInput  style={styles.textBox} placeholder='Password' onChangeText={newText => setpassword(newText)}></TextInput>
      <View style={styles.loginButton}>
        <Button title='Login'  color={Constans.Colores.cyan} onPress={()=> loginButtonClickHandler(true)}/>
      </View>
    </SafeAreaView>)
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignContent: "center",
      alignItems:"center",
      justifyContent:"center",
      paddingTop: Platform.OS==='android'?StatusBar.currentHeight:0
  
    },
    logo:{width:"30%",height:"30%",resizeMode:"contain" },
    textBox:{
      width:"40%",
      height:"10%",
      borderBottomColor: Constans.Colores.rojo,
  
         borderBottomWidth: 2     // Add this to specify bottom border thickness
    },
    loginButton:{
      paddingTop:30
    }
  });
  
export default LoginScreen
