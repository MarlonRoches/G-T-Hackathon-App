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
import SubTitle from '../../Components/SubTitle';
import TextTitle from '../../Components/TextTitle';
import TitleButton from '../../Components/TitleButton';

function WalkTuto_PuntosGyT({setWalkDone}){
    const WalkTuto_PuntosGyT= StyleSheet.create({
        SafeArea: {
            width:"100%",
            height:"100%",
            // backgroundColor: "red",
            display:"flex", flexDirection:"column", alignItems:"center"

        },
        imageContainer:{
            width:"100%",
            height:"70%",
            // backgroundColor:"green",
            display:"flex",
            flexDirection:'row',
            justifyContent:"center",
            alignItems:"flex-end"
           },
        imageDisplay:{
            width:"75%",
             height:"75%",
            resizeMode:"contain",
            marginBottom:10
        }
    })

    return(<>
    <SafeAreaView  style={WalkTuto_PuntosGyT.SafeArea}>
        <View style={WalkTuto_PuntosGyT.imageContainer}>
            <Image style={WalkTuto_PuntosGyT.imageDisplay} source={require("../../../assets/Walkthrough/TodosLosPuntos.png")}/>
        </View>

        <TextTitle 
        paddingTop={24} paddingBottom={4}
        width={"90%"}
        values={"Todos los Puntos GyT"} height={88}
        textStyle={{
            title:{
                fontWeight:"bold",
                fontSize: 32,
                textAlign:"center",
                paddingTop:10,
                paddingBottom:10,
                height:60 ,
                width:316
            }
        }}
        />
        <SubTitle 
        paddingTop={24} paddingBottom={4}
        width={"90%"}
        values={"Visita e interactúa con todos los puntos de interacción en Guatemala."} height={95} 
        textStyle ={{
            title:{
           
                fontSize: 14,
                textAlign:"center",
                paddingTop:0,
                paddingBottom:30,
    
                height:"auto",
                width:"80%"
            }
        }} 
        />
        {/* <SliderSteps bullets = {MetaValues.length} active={WalkIterator}/> */}
        
        <TitleButton handle={()=> setWalkDone(true)}
        // handle= {()  => Siguiente(MetaValues.length)}
        value={"Siguiente"}
        style={{
          justifyContent: "center",
          padding: 16,
          backgroundColor:"black",
          color:"white",
          width:"80%",
          height:56,
          borderRadius: 15,

        }} 
        textStyle={{
            textAlign:"center", 
            color:"white", 
            fontSize:16
            }}/>

    </SafeAreaView>
    <StatusBar style="auto" />
    </>)

}

export default WalkTuto_PuntosGyT