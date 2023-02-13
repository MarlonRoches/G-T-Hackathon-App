import { StyleSheet, Text, View, TouchableNativeFeedback} from "react-native";

function TitleButton({style, textStyle, value, handle}) {
   const styles = StyleSheet.create({
        screenContainer: style,
        textStyle: textStyle
      });
    return (
        <TouchableNativeFeedback onPress={() => handle()}>
            
            <View style={styles.screenContainer}>
            <Text style={styles.textStyle}>{value}</Text>
            </View>
        </TouchableNativeFeedback>
      );
}

export default TitleButton