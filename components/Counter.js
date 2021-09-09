import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter } from '../redux/actions';

const Counter = ({ navigation }) => {
    const dispatch = useDispatch()

    const HandlerIncrementCounter = (val) => dispatch(incrementCounter(val))
    const HandlerDecrementCounter = (val) => dispatch(decrementCounter(val))

    //const tasks = useSelector(state => state.tasks)
    const valueCounter = useSelector(state => state.value)
    return (
        <View  >
            <View>
                <Button title="Increment Counter" onPress={HandlerIncrementCounter} color="blue" />
                <Button title="Decrement Counter" onPress={HandlerDecrementCounter} color="purple" />
            </View>
            <View>
                <Text>{"Value : " + JSON.stringify(valueCounter)}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        margin: 10,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    }
})
export default Counter