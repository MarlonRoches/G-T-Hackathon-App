import {
    StyleSheet, Text,
  } from 'react-native';
function PageSubTitle({values, width, height,paddingTop, paddingBottom, textStyle}) {
    
    let styles = StyleSheet.create({})

    if(textStyle === undefined || textStyle === null){
        //default style
         styles = StyleSheet.create({
            title:{
                fontWeight:"bold",
                fontSize: 20,
                marginTop:20,
                marginBottom:10,
                paddingBottom:paddingBottom,
                height:35,
                width:"100%",
                // backgroundColor:"red",
                paddingLeft:"5%"
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

export default PageSubTitle;