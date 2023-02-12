import {
    // Alert, Platform,  TouchableWithoutFeedback,TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, 
    Button
  } from 'react-native';


function MainButton({title, handler}) {
    return(<>
            <Button title={title}  onPress={()=>{ 
                console.log("desde el handler")
                handler()
                }}/>
    </>)
}

export default MainButton