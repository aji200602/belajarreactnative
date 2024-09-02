import React, { useState } from 'react';
import { Text, Button, View, StyleSheet, TextInput } from 'react-native';

//Membuat Komponen Input (Child)
const Input = ({ onAddPerson }) => {
    //let names; <- contoh var js biasa
    const [name, setName] = useState(''); //contoh var state react
    const [amount, setAmount] = useState('');

    //simpan data orang yang lagi main sama kita
    const addPerson = () => {
        //props untuk save data orang
        onAddPerson({ name, amount: parseFloat(amount) });
        setName('');
        setAmount('');
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Name'
                value={name}
                onChangeText={setName}
            ></TextInput>
            <TextInput
                style={styles.input}
                placeholder='Amount'
                value={amount}
                onChangeText={setAmount}
            ></TextInput>
            <Button title='Add' onPress={addPerson} ></Button>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            marginBottom: 16
        },
        input: {
            flex: 1,
            marginHorizontal: 8,
            padding: 8,
            borderColor: '#00000',
            borderWidth: 1,
            borderRadius: 4
        }
    }
)

export default Input;



// // yang aji:
// import React from "react";
// import { Text, Button, View, StyleSheet, TextInput } from "react-native";
// //membuat komponen input
// const Input = ({ onAddPerson }) => {
//   // let names; contoh var js biasa
//   const [name, setName] = useState("");
//   const [amount, setAmount] = useState("");

//   // simpan data orang yang lagi berain
//   const addPerson = () => {
//     //props untuk save data orang, transaksi satu orang ddari awah hingga ke bawah.
//     onAddPerson({ name, amount: parseFloat(amount) });
//     setName(""); // jika kita udah klik calculate, maka nama/amount diinput ulang
//     setAmount("");
//   };
//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeHolder="Name"
//         value={name}
//         onChangeText={setName}
//       ></TextInput>
//       <TextInput
//         style={styles.input}
//         placeHolder="Amount"
//         value={amount}
//         onChangeText={setAmount}
//       ></TextInput>
//       <Button tittle="Add" onPress={addPerson}></Button>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     marginBottom: 16,
//   },
//   input: {
//     flex: 1,
//     marginhorizontal: 8,
//     padding: 8,
//     borderColor: "#000000",
//     borderWidth: 1,
//     borderRadius: 4,
//   },
// });

// export default Input;
