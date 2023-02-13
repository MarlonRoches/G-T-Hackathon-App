// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View,Image, SafeAreaView, TouchableWithoutFeedback,TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert, Platform, StatusBar, TextInput
} from 'react-native';
import {useFonts} from "expo-font"
import Constans from './src/Helpers/Constans';
import Naigation from './Navigation';
import { useState } from 'react';
import LoginScreen from './src/Pages/LoginScreen';
import Walkthrough from './src/Pages/WalkthroughPage/WalkthroughScreen';

export default function App() {
  const [logged, setlogged] = useState(false)
  const [walkthrough, setalkthrough] = useState(false)
  // const [fontsLoaded] = useFonts({
  //   regular_coco: require("./assets/Fonts/cocosharp/Coco-Sharp-Heavy-Italic-trial.ttf"),
  //   heavy_coco: require("./assets/Fonts/cocosharp/Coco-Sharp-Heavy-trial.ttf"),
  // })
  return (
  <>
  <AppInt/>
  </>
   
  );
  function AppInt() {
    if (logged) {
      //ya esta logeado
      if (!walkthrough) {
        // primera vez que inicia sesion o quiere ver el tuto
        return <Walkthrough/>
      } else {
        //ya ha ingfresado
        return<Naigation loginHandler={setlogged}/>
        
      }
    } else {
      //iniciando sesion
      return <LoginScreen loginHandler={setlogged} />
      
    }
  }
}





function ButtonWithAlert(params) {
  return (<Button  color={"red"}
  title='Click me!'
  // onPress={()=>alert('button tapped')}
  onPress={()=>Alert.alert("Mi titulo", "mi mensaje",
  [
    // estos son botones deltro del alert
    {text:"no", onPress:() => console.log("nel pana")},
    {text:"yes", onPress:() => console.log("asies")},
    {text:"xd", onPress:() => console.log("nel pana")},
  ],
  )}

  />
)
}
function SandBox(params) {
  return(<>
   <Text
      numberOfLines={3} //limita el # de lineas en el que el texto se truncara
      onPress={()=> console.clear()}
      >
        Esta es mi app con react native. asdlakjhsdlkfjahslkdfjhalksjdflakjsdlkjfahslkdjfalksjhdflkjaslkdjflakjshasda.s,dma/.s,dm/a.,smd/a.,smd/.dlkjh
        </Text>
        {/* TouchableOpacity: fade al hacer click */}
        {/* TouchableWithoutFeedback: sin efecto al touch */}
        {/* TouchableHighlight: se obscurce al realizar un touch */}
        {/* TouchableNativeFeedback: es u touch solo de android, efecto naticvo */}
        <TouchableHighlight onPress={() => console.log("image taped")} onLongPress={()=> console.log("Long presssssss")}>
          <Image source={require("./assets/favicon.png")}/>

        </TouchableHighlight>
        <TouchableNativeFeedback>
          <View style={{
            width:100,
            height:30,
            backgroundColor:"red"
          }}></View>
        </TouchableNativeFeedback>
        {/* //local image */}
        <Image
        blurRadius={0} // cantidad de blur
        fadeDuration={5000} // tiempo de fade en aparecer
        source={{
          uri:"https://picsum.photos/200/300",
          width: 200,
          height : 300,
        }}/>

      {/* esto es el estilo de la barra de opciones de arriba */}
      <StatusBar style="auto" />
  </>)

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
