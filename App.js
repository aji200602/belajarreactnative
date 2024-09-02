import React, { useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/home';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}



// YANG AJI
// import { NavigationContainer } from "@react-navigation/native";
// import React, { useState } from "react";
// import {createStackNavigator} from "@react-navigation/stack";
// import HomeScreen from  './screens/home';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home'>
//         <Stack.Screen name='Home' component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


// TEXT PERINGATAN DARURAT
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, ImageBackground } from 'react-native';


// export default function App() {
//   return (
//     <View style={styles.container}>
//         <ImageBackground source={{uri:"https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/10/2024/08/22/freepicture-2676947468.png"}} resizeMode="cover" style={styles.image}>
//     </ImageBackground>
//     <Text style={styles.text}>PERINGATAN DARURAT
//     </Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     backgroundColor: '#282b78',
//     alignItems: 'center',
//     justifyContent: 'center',


//   },
//   image: {
//     width:500, 
//     height:500,
//     flex:1,
//     justifyContent: 'center',
//   },

//   text: {
//     fontSize: 42,
//     color:"white",
//     fontFamily:"Helvetica",
//     fontWeight:"bold",
//     lineHeight:500,
//     textAlign:'center',
//     height:550
  
//   }
  
// });
