import {
    StyleSheet, Text,
  } from 'react-native';
function SubTitle({values,height,width, paddingBottom,paddingTop}) {
    const styles = StyleSheet.create({
        title:{
           
            fontSize: 14,
            textAlign:"center",
            paddingTop:paddingTop,
            paddingBottom:paddingBottom,

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