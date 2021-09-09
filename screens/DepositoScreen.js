import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { changeDepositoValue, decrementCounter, incrementCounter } from '../redux/actions';

const DepositoScreen = ({ navigation }) => {

  const valueCounter = useSelector(state => state.value)
  const depositoValue = useSelector(state => state.depositoValue)

  const dispatch = useDispatch()
  const HandlerChangeDeposito = (val) => dispatch(changeDepositoValue({ depositoValue: val }))


  return (
    <View style={styles.container}>
      <View>

        <Text style={{
          fontWeight: "bold",
          fontSize: 40,
          color: '#5658dd',
          textAlign: "center",
          marginBottom: 10
        }}>
          Depositos
        </Text>
        <View style={{
          //backgroundColor: "#121214",
          height: 200
        }}>
          <TextInput
            placeholder="Valor do depósito"
            value={depositoValue?.toString()}
            onChangeText={(e) => HandlerChangeDeposito(e)}
            style={{
              textAlign: 'center',
              marginTop: 10, backgroundColor: '#fff', height: 50, borderRadius: 20
            }}
          />
          <View>
            <Text style={{ color: "#fff", fontSize: 10 }}>{depositoValue}</Text>
          </View>
        </View>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default DepositoScreen