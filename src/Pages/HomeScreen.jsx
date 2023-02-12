import React from "react";
import { View,Text } from "react-native";
import MainButton from "../Components/MainButton";

function HomeScreen(params) {
    console.log("HomeScreen component", params.route.params.loginHandler)

    return(<>
    <View>
        <Text>
        HomeScreen
        </Text>
        <MainButton title="log out" handler={()=>params.route.params.loginHandler(false)}/>
    </View>
    </>)
    
}
export default HomeScreen
