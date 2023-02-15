import { useState } from "react";
import { View,Text, SafeAreaView } from "react-native";
import MainButton from "../Components/MainButton";
import PuntosGyT from "./PuntosGyT/WalkTuto_PuntosGyT";
import HomeContainer from "./HomeScreen/HomeContainer";

function HomeScreen(params) {
    const [WalkDone, setWalkDone] = useState(false)
    return(<>
    <SafeAreaView>
         <HomeContainer/>
    </SafeAreaView>
    </>)
    
}
function HomeSelector({WalkDone, setWalkDone}) {
    if (WalkDone) {
        // si ya se ha hecho el tutorial, home

    } else {
       return  <PuntosGyT setWalkDone={setWalkDone}/>
        
    }
    
}
export default HomeScreen
