import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const MapModule = ({setWalkDone}) => {
  return (
    <SafeAreaView >
       <>
       <View style={styles.scrollViewContainer}>
        <View style={styles.MapViewContainer}>
        
            {/* <View style={{backgroundColor:"pink", height:"13%", }}>
                <Text style={{fontSize:34, textAlign:'left', fontWeight:"bold"}}>Coloca tu Marca</Text>
                <Text style={{fontSize:14, textAlign:'left', color:"grey"}}>Apunta hacia donde te gustaría colocar tus stickers y cuando estés listo, presiona el botón para pegarla.</Text>
            </View> */}
            
            <BackgroundMap/>
            <BulletList/>

        </View>
        </View>
        <StatusBar style="auto" />
        </>
    </SafeAreaView>
  );
};
function BackgroundMap(params) {
    return(<>
    
    <View style={{backgroundColor:"cyan", height:"70%"}}>
                <Image source={require("../../../assets/PlaceHolders/mapPlaceholder.png")} style={{width:"100%", height:"100%", resizeMode:'cover'}}/>
            </View>
            </>)
}
function BulletList(){
    return(<>
    <ScrollView style={{ height:"20%",  paddingTop:10 }} contentContainerStyle={{alignItems:"center"}} > 
                
                <LocationBullet direccion={"Zona 10" } logo={"oaklabd"} item={"150m"} ubicacion={"OAKLAND MALL ZONA 10"} />
                <LocationBullet direccion={"Zona 10" } logo={"oaklabd"} item={"150m"} ubicacion={"OAKLAND MALL ZONA 10"} />
                <LocationBullet direccion={"Zona 10" } logo={"oaklabd"} item={"150m"} ubicacion={"OAKLAND MALL ZONA 10"} />
                <LocationBullet direccion={"Zona 10" } logo={"oaklabd"} item={"150m"} ubicacion={"OAKLAND MALL ZONA 10"} />
                <LocationBullet direccion={"Zona 10" } logo={"oaklabd"} item={"150m"} ubicacion={"OAKLAND MALL ZONA 10"} />
                <LocationBullet direccion={"Zona 10" } logo={"oaklabd"} item={"150m"} ubicacion={"OAKLAND MALL ZONA 10"} />
                
            </ScrollView>
    </>)
}
function LocationBullet({logo, ubicacion, direccion, item}) {
    return(<>


        <View style={{width:"80%", height:90, backgroundColor:"#A6AFBD", marginBottom: 10, borderRadius:25, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>
            <View style={{backgroundColor:"white", width:"15%", height:"60%", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", borderRadius:10}}>
              <Image style={{width:"80%",height:"80%", resizeMode:'contain'}}  source={require("../../../assets/PlaceHolders/circus_tent.png")} />
            
            </View>
           
            <View>
                <Text style={{fontWeight:"bold"}}>{ubicacion}</Text>
                <Text>{direccion}</Text>
            </View>
            <Text>{item}</Text>
        </View>
    </>)
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS==='android'?StatusBar.currentHeight:0
  },
  scrollView: {
  },
  scrollViewContainer:{
    width:"100%",
    height:"100%",
    display:"flex",
    flexDirection:'column',
    alignItems:'center',

  },
  text: {
    fontSize: 42,
  },
  MapViewContainer:{ width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:'space-between'}
});

export default MapModule