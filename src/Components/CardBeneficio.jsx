import { Image, StyleSheet, Text,TouchableNativeFeedback,View } from "react-native";
import TextTitle from "./TextTitle";

function CardBeneficio({CardBeneficioStyle, cardType}) {
    let styles_CardBeneficio = StyleSheet.create({})
    if(CardBeneficioStyle === undefined || CardBeneficioStyle === null){
        //default style
         styles_CardBeneficio = StyleSheet.create({
            CardBeneficioContainer:{
                height:210,
                width:"87%",
                backgroundColor:"#F0F4FA",
                display:"flex",
                flexDirection:"row",
                // justifyContent:"flex-end",
                borderRadius:10,
                marginBottom:5
            },
            imageContainer:{width:"40%", height :"100%",resizeMode:"cover", display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center"}
        })
    
    }else{
         styles_CardBeneficio = StyleSheet.create(CardBeneficioStyle)
    }

    function imageSelector() {
        switch (cardType) {
            case 1:
                // return  require("../../assets/G&T/Arts/VisaCardcrop.png")
                return  require("../../assets/PlaceHolders/confetti_ball.png")
                
            case 2:
                // return  require("../../assets/G&T/Arts/MasterCardcrop.png")
                return  require("../../assets/PlaceHolders/nail_care.png")
            case 3:
                // return  require("../../assets/G&T/Arts/MasterCardcrop.png")
                return  require("../../assets/PlaceHolders/blue_car.png")
            case 4:
                // return  require("../../assets/G&T/Arts/MasterCardcrop.png")
                return  require("../../assets/PlaceHolders/beers.png")
            case 5:
                // return  require("../../assets/G&T/Arts/MasterCardcrop.png")
                return  require("../../assets/PlaceHolders/circus_tent.png")
            case 6:
                // return  require("../../assets/G&T/Arts/MasterCardcrop.png")
                return  require("../../assets/PlaceHolders/roller_coaster.png")
                

            default:
                return  require("../../assets/PlaceHolders/placeholder3c.jpg")
        }
    }

    return (<TouchableNativeFeedback>
        <View style={styles_CardBeneficio.CardBeneficioContainer}>
            <View style={styles_CardBeneficio.imageContainer}>
                <Image style={{width:"50%", height :"30%",resizeMode:"contain", borderRadius:10 }} source={imageSelector()}/>
            </View>
            {/* <Image style={{width:"40%", height :"100%",resizeMode:"cover", backgroundColor:"blue" }} source={require("../../assets/PlaceHolders/Placeholder1.jpg")}/> */}
            <CardBeneficioFooter/>
        </View>
    </TouchableNativeFeedback>)
}

function CardBeneficioFooter({}){

    let styles_CardBeneficioFooter = StyleSheet.create({
            Footer:{
                width:"60%",
                height :"100%",
                // backgroundColor:"white",
                display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center"
            },
            styles_CardBeneficioSubFooter:{
                // backgroundColor:"green",
                width:"80%", height :"85%",
                display:"flex",flexDirection:"column", justifyContent:"space-between"
            }
        })

return (
    <View style={styles_CardBeneficioFooter.Footer}>
        <View  style={styles_CardBeneficioFooter.styles_CardBeneficioSubFooter}>
            <FooterTag/>        
            <FooterInfo/>
            <FooterButtons/>
        </View>
    </View>
)
function FooterTag() {
    return(<>
        <View  iew style={{ height:"20%", display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <View  style={{backgroundColor:"#303742", width:"60%", height:"80%", borderRadius:30, display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"white"}}>Restaurante</Text>
            </View>
            <Image style={{ height:"60%", resizeMode:"contain", opacity:0.5, marginTop:5 }} source={require("../../assets/Icons/optionDots.png")}/>
        </View>
    </>)
}
function FooterInfo() {
    return(<>
        <Text style={{ fontWeight:"bold", fontSize:16, paddingLeft:"5%", paddingTop:"4%"}}>10% de Descuento</Text>
        <Text  style={{fontWeight:"normal", fontSize:14,paddingLeft:"5%", color:"#1C2129"}} >Pollo Brujo</Text>
        <Text  style={{fontWeight:"normal", fontSize:12,paddingLeft:"5%", color:"#818A99"}} >Al comprar un combo de 2 piezas...</Text>
    </>)
}

function FooterButtons() {
    return(<>
        <View style={{width:"80%",height:"20%", display:"flex",flexDirection:"row",justifyContent:"space-between"}}> 
                <View style={{backgroundColor:"white", width:"70%", height:"100%", display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center", borderRadius:7}}>
                    <Text style={{fontSize:16}}>Canjear</Text>
                </View>
                <View style={{backgroundColor:"white", width:"25%", height:"100%", display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center", borderRadius:7}}>
                    <Image style={{width:"65%", height:"65%", resizeMode:"contain" }} source={require("../../assets/Icons/shopcart.png")}/>
                </View>
        </View>
    </>)
}
}
export default CardBeneficio;
