import {
    StyleSheet, Text,
  } from 'react-native';
function SubTitle({values,height,width, paddingBottom,paddingTop, textStyle}) {
    let styles = StyleSheet.create({})

    if(textStyle === undefined || textStyle === null){
        //default style
         styles = StyleSheet.create({
            title:{
           
                fontSize: 14,
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
        <Text style={styles.title}>{values}</Text>
    </>
    )
}

export default SubTitle;