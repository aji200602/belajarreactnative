import React, { useState } from 'react';
import { ScrollView, Text, Button, View, StyleSheet, TextInput } from 'react-native';

//import component input
import Input from '../components/input';
import Summary from '../components/summary';

//Parent of Input
const HomeScreen = ( ) => {
    const [people, setPeople ] = useState([]); //database people

    const addPerson = (person) => {
        //append(), push() / add new data to list/array
        setPeople([...people, person ]);
    }

    return (
        <ScrollView style={styles.container}>
            <Input onAddPerson={addPerson} />
            <Summary people={people} />
        </ScrollView>
    )  
}

const styles = StyleSheet.create(
    {
        container: {
            padding: 16
        }
    }
)
export default HomeScreen;



// yang aji
// import React, { useState } from "react";
// import { Text, Button, View, StyleSheet, TextInput } from "react";

// //import component input
// import Input from "../components/input";
// import Summary from "../components/summary";

// const HomeScreen = () => {
//   const [people, setPeople] = useState([]); //database people

//   const addPerson = (person) => {
//     //apend() add new data to list/array
//     setPeople([...people, person]);
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Input onAddPerson={addPerson}></Input>
//       <Summary people={people}></Summary>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create(
//         {
//             container: {
//                 padding: 16
//             }
//         }
//     )
//     export default HomeScreen;