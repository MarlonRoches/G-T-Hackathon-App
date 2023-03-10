import { useState } from "react";
import { View,Text, SafeAreaView ,StyleSheet, StatusBar,Image, TouchableOpacity} from "react-native";
import MainButton from "../../Components/MainButton";
import PageSubTitle from "../../Components/PageSubTitle";
import TextTitle from "../../Components/TextTitle";
import TitleButton from "../../Components/TitleButton";

function ScannDoneScreen({goBack, backToHome}) {
    return(<>
        <SuccesContainer goBack={goBack} backToHome={backToHome}/>
      <StatusBar style="auto" />
        
    </>)
}
function SuccesContainer({goBack, backToHome}) {
    return (<SafeAreaView style={Styles.SuccesContainer}>

        <CancelBarr backToHome={backToHome}/>
        <CuponImage/>
        <TextTitle  values={"¡Felicidades!"}/>
        <PageSubTitle values={"Toma una Captura de Pantalla al código QR y canjéalo en el establecimiento. "}/>
        
        <TitleButton style={Styles.mainButton} textStyle={Styles.mainButtonText} value={"Seguir Interactuando con ARte"} handle={()=>goBack(false)} /> 
        <TitleButton style={Styles.secondButton} textStyle={Styles.secondButtonText} value={"Compartir en Redes Sociales "} handle={()=>alert("compartieno")}/> 
    </SafeAreaView>)
}
function CuponImage(params) {
    return(<>
        <View style={Styles.imageContainer}>
                <Image style={Styles.cuponImage} source={require("../../../assets/G&T/Arts/pizzaCupon.png")}/>
        </View>
    
    </>)
}
function CancelBarr({backToHome}) {
    return(<View style={Styles.CancelBarr}>
            <TouchableOpacity onPress={() =>  backToHome()}>
                <Image View style={Styles.exitIcon} source={require("../../../assets/Icons/exitIcon.png")}/>
        </TouchableOpacity>
    </View>)
}

const Styles = StyleSheet.create({
    SuccesContainer:{
        width:"100%",
        height:"100%",
        backgroundColor:"white",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",

    },
    CancelBarr:{
        width: "90%",
        height:30,
        backgroundColor:"white",
        marginTop:"10%", 
        textAlign:"right",
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-end",
        justifyContent: "center",
        marginBottom: 30

    },
    exitIcon:{
        width:30,
        height:30,
        resizeMode: "contain",
        paddingLeft:10
    },
    imageContainer:{
        width: "90%",
        height: "50%",
        backgroundColor:"#F0F4FA",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
        marginBottom:10
        // alignContent:"center",
},
    cuponImage:{
        width:"90%",
        height:"90%",
    },
    mainButton:{width: "80%",
    height: 50,
     backgroundColor:"#303742",
     marginBottom:5,
     display:"flex",
     flexDirection:"column",
     alignItems:"center",
     justifyContent:"center",
     borderRadius:10,
     shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,
    },
    mainButtonText:{
        fontSize:16,
        fontWeight:"bold",
        color:"white"
    },
    secondButton:{
        width: "80%",
        height: 50,
        backgroundColor:"white",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,
    },
    secondButtonText:{
        color:"#1C2129",
        fontSize:16


    },

});
export default ScannDoneScreen