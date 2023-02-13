import {
    StyleSheet, Text, View,Image, SafeAreaView, TouchableWithoutFeedback,TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert, Platform, StatusBar, TextInput
  } from 'react-native';
import TextTitle from '../../Components/TextTitle';
import SubTitle from '../../Components/SubTitle';
import { useState } from 'react';
import MetaValues from "./WalkMetaValues.json"
import {Slider} from '@miblanchard/react-native-slider';
function Walkthrough({params}) {
    
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

        <View style={styles.imageContainer}>
        <ImageSelector i ={WalkIterator}/>

        </View>
        <Image />
        <TextTitle values={WalkMetaValues[WalkIterator].Title} height={60} />
        <SubTitle values={WalkMetaValues[WalkIterator].SubTitle} height={95}/>
        
        <SliderSteps bullets = {MetaValues.length} active={WalkIterator}/>
        {/* <Text>vamos por el  {WalkIterator} </Text> */}
        {/* <Text>La cantidad de elementos son {MetaValues.length} </Text> */}
        <Button style={{marginTop:30}} title='Siguiente' onPress={() => Siguiente(MetaValues.length)}/>
        <Button  style={{marginTop:30}} title='Anterior' onPress={() => Anterior()}/>
        <TouchableNativeFeedback>
        <Text style={{textDecorationLine:"underline", marginTop:30}} onPress={() => Siguiente(MetaValues.length)}>Saltar</Text>

        </TouchableNativeFeedback>
        {/* <View style={styles.container}>
                <Slider
                    disabled= {true}
                    value={WalkIterator}
                    onValueChange={value => setWalkIterator(value)}
                    maximumValue={MetaValues.length -1}
                />
                <Text>Value: {WalkIterator}</Text>
        </View> */}
    </SafeAreaView>
    <StatusBar style="auto" />
    </>
    )
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