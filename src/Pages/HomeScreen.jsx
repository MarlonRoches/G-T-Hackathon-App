import { useState } from "react";
import { View,Text, SafeAreaView } from "react-native";
import HomeContainer from "./HomeScreen/HomeContainer";
import ScannContainer from "./HomeScreen/ScannContainer";

function HomeScreen(params) {
    const [ScannMode, setScannMode] = useState(false)
    const [ScannedDone, setScannedDone] = useState(false)

    return(<>
    <SafeAreaView>
        <HomeSelector ScannMode ={ScannMode} setScannMode ={setScannMode}/>
    </SafeAreaView>
    </>)
    
}
function HomeSelector({ScannMode, setScannMode}) {
    if (ScannMode) {
        // si ya se ha hecho el tutorial, home
        if (ScannedDone) {
            return 
        } else {
        return  <ScannContainer setScannMode={setScannMode}/>
        }
    } else {
        return <HomeContainer setScannMode={setScannMode}/>
        
    }
    
}
export default HomeScreen
