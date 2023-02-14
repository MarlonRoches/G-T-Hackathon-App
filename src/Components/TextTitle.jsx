import {
    StyleSheet, Text,
  } from 'react-native';
function TextTitle({values, width, height,paddingTop, paddingBottom, textStyle}) {
    
    let styles = StyleSheet.create({})

    if(textStyle === undefined || textStyle === null){
        //default style
         styles = StyleSheet.create({
            title:{
                fontWeight:"bold",
                fontSize: 24,
                textAlign:"center",
                paddingTop:paddingTop,
                paddingBottom:paddingBottom,
                height:height,
                width:width
            }
        })
    
    }else{
         styles = StyleSheet.create(textStyle)
    
    }
    
    return(<>
        <Text style={styles.title} >{values}</Text>
    </>
    )
}

export default TextTitle;