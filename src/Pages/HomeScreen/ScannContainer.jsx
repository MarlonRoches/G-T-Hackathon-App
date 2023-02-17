import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  View,
  TouchableOpacity
} from 'react-native';

const ScannContainer = ({setScannedDone}) => {
  return (
    <SafeAreaView >
       <>
       <View style={styles.scrollViewContainer}>
        <View style={styles.cameraViewContainer}>
        
            <View style={{backgroundColor:"white", height:"13%", }}>
                <Text style={{fontSize:34, textAlign:'left', fontWeight:"bold"}}>Coloca tu Marca</Text>
                <Text style={{fontSize:14, textAlign:'left', color:"grey"}}>Apunta hacia donde te gustaría colocar tus stickers y cuando estés listo, presiona el botón para pegarla.</Text>
            </View>
            <View style={{backgroundColor:"cyan", height:"67%", }}>
            </View>
            <View style={{backgroundColor:"white", height:"20%", display:"flex", flexDirection:"row",justifyContent:'space-evenly', alignItems:"center"}}>
                <TouchableOpacity>
                    <Image style={{width:37, height:37,resizeMode:'contain' }} source={require("../../../assets/Icons/videoIcon.png")}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> setScannedDone(true)}>
                    <Image style={{width:121, height:121,resizeMode:'contain' }} source={require("../../../assets/Icons/photoIcon.png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> setScannMode(false)}>
                    <Image style={{width:37, height:37,resizeMode:'contain' }} source={require("../../../assets/Icons/backArrow.png")} />
                </TouchableOpacity>
            </View>

        </View>
            
        </View>
        <StatusBar style="auto" />
        </>
    </SafeAreaView>
  );
};

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
    backgroundColor: 'white',

  },
  text: {
    fontSize: 42,
  },
  cameraViewContainer:{backgroundColor:"red", marginTop:70, width:"90%", height:"90%", display:"flex", flexDirection:"column", justifyContent:'space-between' }
});

export default ScannContainer