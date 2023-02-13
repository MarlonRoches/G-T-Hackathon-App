import {
    StyleSheet, Text, View,Image, SafeAreaView, TouchableWithoutFeedback,TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert, Platform, StatusBar, TextInput
  } from 'react-native';
function Walkthrough(params) {
    return(<>
    <SafeAreaView style={{backgroundColor:"grey", width:"100%", height:"100%"}}>
        <Text>Walkthrough</Text>
    
    </SafeAreaView>
    
    <StatusBar style="auto" />
    
    </>

    )
}
const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS==='android'?StatusBar.currentHeight:0
    }

})
export default Walkthrough;