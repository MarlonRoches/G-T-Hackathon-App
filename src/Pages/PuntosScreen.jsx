import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  View,
} from 'react-native';
import PageTitle from '../Components/PageTitle';
import Card from '../Components/Card';
import PageSubTitle from '../Components/PageSubTitle';
import CardBeneficio from '../Components/CardBeneficio';
import TitleButton from '../Components/TitleButton';
import WalkTuto_PuntosGyT from './PuntosGyT/WalkTuto_PuntosGyT';

const PuntosScreen = () => {
    const [WalkDone, setWalkDone] = useState(false)

  return (
    <SafeAreaView >
       <>
       <PuntosSelector WalkDone={WalkDone} setWalkDone={setWalkDone}/>
        </>
    </SafeAreaView>
  );
};
function PuntosSelector({WalkDone, setWalkDone}) {
    if (WalkDone) {
        // si ya se ha hecho el tutorial, home
        return <Text>Busqueda en el mapa</Text>
    } else {
       return  <WalkTuto_PuntosGyT setWalkDone={setWalkDone}/>
        
    }
    
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
    backgroundColor: 'white',

  },
  text: {
    fontSize: 42,
  },
  cameraViewContainer:{backgroundColor:"red", marginTop:70, width:"90%", height:"90%", display:"flex", flexDirection:"column", justifyContent:'space-between' }
});

export default PuntosScreen