import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function LoginForm() {
  return (
  <View style={styles.container}>
    <View style={styles.form}></View>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: "#f5f5f5"
    }
})