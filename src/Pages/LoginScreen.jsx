  // import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import {
    StyleSheet, 
    Text, 
    
    View,
    Image, StatusBar,
    SafeAreaView, 
    // Alert, Platform,  TouchableWithoutFeedback,TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, 
    TouchableOpacity,
    TouchableNativeFeedback,
    Button, 
    TextInput
  } from 'react-native';
  import Constans from '../Helpers/Constans';
  import BouncyCheckbox from "react-native-bouncy-checkbox";

  
  function LoginScreen({loginHandler}) {
    const [userVal, setuserVal] = useState("")
    const [password, setpassword] = useState("")
    function loginButtonClickHandler(){
        loginHandler(true)
    }

    return(
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/G&T/Logo_Aumenta.jpg")}/>
        {/* <Text style={{fontSize:40}}> G&T ARcade  </Text> */}
        <TextInput style={styles.textBox} placeholder='Usuario' onChangeText={newText => setuserVal(newText)} ></TextInput>
        <TextInput  style={styles.textBox} placeholder='Password' onChangeText={newText => setpassword(newText)}></TextInput>
        <Remember/>
        <AuthMethods/>
        <Image style={styles.GoogleImage} source={require("../../assets/ContinueGoogle.png")}/>
        <LoginButton/>
        <Forgotten/>
        <MetaInfo/>
      </SafeAreaView>
    )
    function Remember(){
      return(<>
      <View style={loginSyles.horizontalView}>
          <BouncyCheckbox onPress={()=> {}}/>
          <Text> Recuerdame</Text>
        </View>
        </>)
    }
    function AuthMethods(){
      return(<>
      <View style={loginSyles.horizontalView}>
        <Image style={loginSyles.authMethohsIcon} source={require("../../assets/Face_ID_logo.png")}/>
        <Text>Face ID</Text>
        <Text>   |   </Text>
        <Image style={loginSyles.authMethohsIcon} source={require("../../assets/Touch_ID_logo.png")}/>
        <Text>Touch ID</Text>
      </View>
      </>)
    }
    function LoginButton(params) {
      return(<>
      <>
        <TouchableNativeFeedback  >
          <View style={styles.loginButtoncontainer} >
            <Button title='Login'  color={Constans.Colores.azul} sty onPress={()=> loginButtonClickHandler(true)}/>

            {/* <Text style={styles.loginButton} ><View><Text>Login</Text></View></Text> */}
          </View>
        </TouchableNativeFeedback>
        
      </>
      </>)
      
    }
    function Forgotten(params) {
      return(<>
      <TouchableOpacity style={{ height: 30, marginTop: 10 }}>
          <Text>Olvide mi contraseña</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 30, marginTop: 10 }}>
          <Text>Consulta / Crea tu usuario</Text>
        </TouchableOpacity>
        </>)
    }
    function MetaInfo(params) {
      return(<>
      <View style={loginSyles.MetaInfoContainer}>
        <Text>Version: 0.0.-0</Text>
        <Image  source={require("../../assets/favicon.png")}/>
      </View>
      </>)
    }
  }
  const loginSyles= StyleSheet.create({
    horizontalView:{display:"flex", flexDirection:"row",alignItems:"center", marginTop: 10, marginBottom:5},
    authMethohsIcon: {width:24,height:24, marginLeft:10, marginRight:10},
    MetaInfoContainer:{
      // backgroundColor:"red",
    width:"90%", height:"5%", marginTop:30,
      display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"
    }
  })
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignContent: "center",
      alignItems:"center",
      justifyContent:"center",
      paddingTop: Platform.OS==='android'?StatusBar.currentHeight:0
  
    },
    logo:{
      width:"60%",
      height:"30%",
      // backgroundColor:"orange",

      resizeMode:"contain"
    },
    textBox:{
      width:"80%",
      height:"8%",
      borderBottomColor: Constans.Colores.rojo,
  
         borderBottomWidth: 2     // Add this to specify bottom border thickness
    },
    loginButtoncontainer:{
      // marginTop:25,
      width:"80%",
      height:50,
      // backgroundColor:"green",
      flexDirection:"column",
      justifyContent:"center",
      alignContent:"center",

    },
    loginButton:{
      width:"100%",
      backgroundColor: "yellow",
      height:30,
      display:"flex",
      
    },
    GoogleImage:{width:"60%", resizeMode:"contain" }
  });
  
export default LoginScreen
