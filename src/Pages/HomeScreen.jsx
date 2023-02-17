import { useState } from "react";
import { View,Text, SafeAreaView } from "react-native";
import HomeContainer from "./HomeScreen/HomeContainer";
import ScannContainer from "./HomeScreen/ScannContainer";
import ScannDoneScreen from "./HomeScreen/ScannDoneScreen";

function HomeScreen(params) {
    const [ScannMode, setScannMode] = useState(false)
    const [ScannedDone, setScannedDone] = useState(false)

    return(<>
    <SafeAreaView>
        <HomeSelector ScannMode ={ScannMode} setScannMode ={setScannMode} ScannedDone={ScannedDone} setScannedDone={setScannedDone}/>
    </SafeAreaView>
    </>)
    
}
function HomeSelector({ScannMode, setScannMode, ScannedDone, setScannedDone}) {
    function backToHome(){
        setScannMode(false)
        setScannedDone(false)
    }
    if (ScannMode) {
        // si ya se ha hecho el tutorial, home
        if (ScannedDone) {
            // ya se ha 
            return <ScannDoneScreen goBack={setScannedDone} backToHome ={backToHome}/>
        } else {
        return  <ScannContainer  setScannMode ={setScannMode} setScannedDone={setScannedDone}/>
        }
    } else {
        return <HomeContainer setScannMode={setScannMode}/>
        
    }
    
}
export default HomeScreen
