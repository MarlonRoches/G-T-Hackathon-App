import { useState } from "react";
import { View,Text, SafeAreaView } from "react-native";
import MainButton from "../Components/MainButton";
import PuntosGyT from "./PuntosGyT/WalkTuto_PuntosGyT";

function PuntosScreen(params) {
    const [WalkDone, setWalkDone] = useState(false)
    return(<>
    <SafeAreaView>
        <HomeSelector WalkDone={WalkDone} setWalkDone={setWalkDone}/>
    </SafeAreaView>
    </>)
    
}
function HomeSelector({WalkDone, setWalkDone}) {
    if (WalkDone) {
        // si ya se ha hecho el tutorial, home
        console.log("si ya se ha hecho el tutorial, home")

        return <>
        <Text>PuntosScreen</Text>
        </>
    } else {
        console.log("PuntosGyT")

       return  <PuntosGyT setWalkDone={setWalkDone}/>
        
    }
    
}
export default PuntosScreen
