import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react';


export default function Login() {
    const [Email, setEmail] = useState()
    return (
        <View style={styles.container}>
            <Text>{Email ?? "No email"}</Text>
            <TextInput placeholder='Enter Your Email' onChangeText={setEmail} style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    input: {
        borderWidth: 2,
        width: 200
    }
});