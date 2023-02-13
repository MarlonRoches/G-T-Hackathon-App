import {
    StyleSheet, Text,
  } from 'react-native';
function TextTitle({values, width, height,paddingTop, paddingBottom}) {
    
    const styles = StyleSheet.create({
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

    return(<>
        <Text style={styles.title} >{values}</Text>
    </>
    )
}

export default TextTitle;