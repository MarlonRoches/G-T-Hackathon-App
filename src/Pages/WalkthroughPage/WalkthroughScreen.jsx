import {
    StyleSheet, Text, View,Image, SafeAreaView, TouchableWithoutFeedback,TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert, Platform, StatusBar, TextInput
  } from 'react-native';
import TextTitle from '../../Components/TextTitle';
import SubTitle from '../../Components/SubTitle';
import { useEffect, useState } from 'react';
import MetaValues from "./WalkMetaValues.json"
import {Slider} from '@miblanchard/react-native-slider';
import TitleButton from '../../Components/TitleButton';
function Walkthrough({loginHandler}) {
 
    const [WalkIterator, setWalkIterator] = useState(0)
    const [WalkMetaValues, setWalkMetaValues] = useState(MetaValues)
    const images = [
        <Image style={styles.imageDisplay} source={require(`../../../assets/Walkthrough/Obras_Colaborativas.png`)}/>,
        <Image style={styles.imageDisplay} source={require(`../../../assets/Walkthrough/ArteColab.png`)}/>,
        <Image style={styles.imageDisplay} source={require(`../../../assets/Walkthrough/Puntos.png`)}/>,
        <Image style={styles.imageDisplay} source={require(`../../../assets/Walkthrough/AR.png`)}/>,
        <Image style={styles.imageDisplay} source={require(`../../../assets/Walkthrough/Arte.png`)}/>,
        <Image style={styles.imageDisplay} source={require(`../../../assets/Walkthrough/Marca.png`)}/>,
    ]
    function Siguiente(max) {
        if (WalkIterator === max-1 ) {
            loginHandler(true)
            return WalkIterator
            
        }else {
            return setWalkIterator(WalkIterator+1)
        }
    }
    function Anterior() {
        if (WalkIterator === 0 ) {
            return WalkIterator
            
        }else {
            return setWalkIterator(WalkIterator-1)
        }
    }

    function Skip() {
        if (WalkIterator === 0 ) {
            return WalkIterator
            
        }else {
            return setWalkIterator(WalkIterator-1)
        }
    }
    function ImageSelector({i}) {
        return images[i]
    }
    return(<>
    <SafeAreaView style={ styles.SafeAreaContainer }>
        <ImageDisplayer/>
        <WalkText/>
        <WalkButtons/>
        <TouchableNativeFeedback>
        <Text style={{textDecorationLine:"underline", marginTop:30}} onPress={() => Siguiente(MetaValues.length)}>Saltar</Text>
        </TouchableNativeFeedback>
    </SafeAreaView>
    <StatusBar style="auto" />
    </>
    )
    function ImageDisplayer(){
        return(<>
            <View style={styles.imageContainer}>
                <ImageSelector i ={WalkIterator}/>
            </View>
        </>)
    }

    function WalkButtons(){
        return (<>
        <TitleButton
        handle= {()  => Siguiente(MetaValues.length)}
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
        <TitleButton
        handle= {()  => Anterior()}
        value={"Anterior"}
        style={{
          justifyContent: "center",
          padding: 16,
          backgroundColor:"white",
          width:"80%",
          borderRadius: 15,
        }}
        
        textStyle={{
            textAlign:"center", 
            color:"black", 
            fontSize:16,
            fontWeight:"bold"
            }}
        />
        
        </>)
    }
    function WalkText(){
        return (<>
        <TextTitle 
        paddingTop={24} paddingBottom={4}
        width={"90%"}
        values={WalkMetaValues[WalkIterator].Title} height={88} />
        <SubTitle 
        paddingTop={24} paddingBottom={4}
        width={"90%"}
        values={WalkMetaValues[WalkIterator].SubTitle} height={95}/>
        <SliderSteps bullets = {MetaValues.length} active={WalkIterator}/>
        
        </>)
    }
}
function SliderSteps({bullets, active}) {
    
    const styles_sliderSteps = StyleSheet.create({
        bulletContainer:{ width:"80%",  display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"row", alignContent:"space-between",
        marginBottom:30    },
        bullet:{width:"12%", height:2, backgroundColor:"grey"},
        bulletOn:{width:"12%", height:4, backgroundColor:"black"},
        empty:{width:"10", height:2, backgroundColor:"red"},
    
    })
    function BuildBullets(){
        let result =[]
        for (let index = 0; index < bullets; index++) {
            // result.push(<View key={index} style={styles_sliderSteps.bullet}><Text>o</Text></View>) 
            if (index === active) {
            result.push(<View key={index} style={styles_sliderSteps.bulletOn}><Text>-</Text></View>) 
                
            } else {
            result.push(<View key={index} style={styles_sliderSteps.bullet}><Text>{index}</Text></View>) 
            }           
            // index++
            // result.push(<View key={index} style={styles_sliderSteps.empty}><Text>{index}</Text></View>) 

        }
        return result;
    }
    return(<View style={styles_sliderSteps.bulletContainer}>
        <BuildBullets/>
    </View>)
}
const styles = StyleSheet.create({
    SafeAreaContainer:{
        // backgroundColor:"grey", 
        width:"100%",
         height:"100%",
         display:"flex", flexDirection:"column", alignItems:"center"
        },
   imageContainer:{
    width:404,
    height:443,
    // backgroundColor:"green",
    display:"flex",
    flexDirection:'row',
    justifyContent:"center",
    alignItems:"flex-end"
   },
   imageDisplay:{width:"80%", height:"80%",resizeMode:"contain" }
})
export default Walkthrough;