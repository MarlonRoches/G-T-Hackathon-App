import {
    StyleSheet, Text,
  } from 'react-native';
function PageTitle({values, width, height,paddingTop, paddingBottom, textStyle}) {
    
    let styles = StyleSheet.create({})

    if(textStyle === undefined || textStyle === null){
        //default style
         styles = StyleSheet.create({
            title:{
                fontWeight:"bold",
                fontSize: 34,
                marginTop:"8%",
                marginBottom:"8%",
                paddingTop:10,
                paddingBottom:paddingBottom,
                height:70,
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

export default PageTitle;