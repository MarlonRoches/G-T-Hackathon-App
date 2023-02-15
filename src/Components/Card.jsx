import { Image, StyleSheet, Text,TouchableNativeFeedback,View } from "react-native";
import TextTitle from "./TextTitle";

function Card({cardStyle}) {
    let styles_Card = StyleSheet.create({})
    if(cardStyle === undefined || cardStyle === null){
        //default style
         styles_Card = StyleSheet.create({
            CardContainer:{
                height:240,
                width:"87%",
                backgroundColor:"green",
                display:"flex",
                flexDirection:"column",
                justifyContent:"flex-end",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                borderRadius:10,
            }
        })
    
    }else{
         styles_Card = StyleSheet.create(cardStyle)
    }


    return (<TouchableNativeFeedback>
        <View style={styles_Card.CardContainer}>
            <Image style={{width:"100%", height :"70%",resizeMode:"cover", backgroundColor:"blue" }} source={require("../../assets/PlaceHolders/Placeholder1.jpg")}/>
            <CardFooter/>
        </View>
    </TouchableNativeFeedback>)
}

function CardFooter({cardStyle}){

    let styles_CardFooter = StyleSheet.create({})
    if(cardStyle === undefined || cardStyle === null){
        //default style
         styles_CardFooter = StyleSheet.create({
            Footer:{
                height:"30%",
                width:"100%",
                backgroundColor:"white",
            }
        })
    
    }else{
         styles_CardFooter = StyleSheet.create(cardStyle)
    }
return (<View style={styles_CardFooter.Footer}>
    <Text style={{fontWeight:"bold", fontSize:20, paddingLeft:"5%", paddingTop:"4%"}}>Mis Stickers</Text>
    <Text  style={{fontWeight:"normal", fontSize:14,paddingLeft:"5%", color:"#818A99"}} >4 Disponibles</Text>
</View>)
}
export default Card;
