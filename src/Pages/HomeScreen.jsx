import React from "react";
import { View,Text } from "react-native";
import MainButton from "../Components/MainButton";
import PuntosGyT from "./PuntosGyT/PuntosGyT";

function HomeScreen(params) {

    return(<>
    <View>
        <PuntosGyT/>
        <Text>
        HomeScreen
        </Text>
        {/* <MainButton title="log out" handler={()=>params.route.params.loginHandler(false)}/> */}
    </View>
    </>)
    
}
export default HomeScreen
