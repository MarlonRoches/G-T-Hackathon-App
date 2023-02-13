import {
    StyleSheet, Text,
  } from 'react-native';
function TextTitle({values, width, height}) {
    
    const styles = StyleSheet.create({
        title:{
            fontWeight:"bold",
            fontSize: 24,
            textAlign:"center",
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