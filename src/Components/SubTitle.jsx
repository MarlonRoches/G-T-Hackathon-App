import {
    StyleSheet, Text,
  } from 'react-native';
function SubTitle({values,height,width}) {
    const styles = StyleSheet.create({
        title:{
           
            fontSize: 14,
            textAlign:"center",
            height:height,
            width:width
        }
    })
    return(<>
        <Text style={styles.title}>{values}</Text>
    </>
    )
}

export default SubTitle;