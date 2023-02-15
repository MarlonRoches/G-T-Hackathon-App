import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Constantes from "./src/Helpers/Constans";

import HomeScreen from "./src/Pages/HomeScreen";
import SettingScreen from "./src/Pages/PuntosScreen";
import { View, Button } from "react-native";

const Tab = createBottomTabNavigator();  // todas las propiedades de las tab

function MyTabs({loginHandler} ){
    // console.log(loginHandler)
    // loginHandler(false)
    return(<>
    
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
        tabBarActiveTintColor:Constantes.Colores.azul
    }}
    >
        <Tab.Screen name="Home"
        component={HomeScreen}
        initialParams={{
            paramertros:"parametro",
            // loginHandler:()=>loginHandler
        }}
        options={{
            headerShown:false,
            tabBarLabel: "Beneficios",
            tabBarIcon:({color, icon}) => {
                
            },
            tabBarBadge:3 //niotificaciones
        }}/>
        <Tab.Screen name="Puntos" component={SettingScreen}  options={{headerShown:false}}/>
        <Tab.Screen name="Premios" component={SettingScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Login"
         options={{headerShown:false}}  
        listeners={{
            tabPress: e=>{
                loginHandler(false)
            }
        }}
        >
        {() => (
            <View>
          <Button title="Cerrar sesión"  onPress={() => loginHandler(false)} /> 
          {/* //} */}

            </View>
        )}
      </Tab.Screen>
        {/* <Tab.Screen name="Settings" component={SettingScreen}/> */}
    </Tab.Navigator>
    
    </>)
}

export default function Naigation({loginHandler}) {
    // params.loginHandler(false)
    return(<>
    <NavigationContainer >
        <MyTabs loginHandler={loginHandler}/>
    </NavigationContainer>
    
    </>)
}