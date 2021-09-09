import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { cambio } from '../constants/Config';
import { changeDepositoValue, decrementCounter, incrementCounter } from '../redux/actions';
import calculate from '../utils/calculate';

const DepositoScreen = ({ navigation }) => {

  const depositoValue = useSelector(state => state.depositoValue)

  const dispatch = useDispatch()
  const HandlerChangeDeposito = (val) => dispatch(changeDepositoValue({ depositoValue: val }))


  const renderItem = ({ item }) => {

    return (
      <View style={styles.item}>
        <Text >{item.moeda} </Text>
        <Text>{calculate(depositoValue, cambio.filter(c => c.moeda === item.moeda)[0])}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={{
        fontWeight: "bold",
        fontSize: 40,
        color: '#5658dd',
        textAlign: "center",
        marginBottom: 10
      }}>
        Deposito
      </Text>
      <View style={{
        //backgroundColor: "#121214", 
        marginBottom: 200,

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
        <FlatList
          style={{ width: '80%' }}
          data={cambio}
          renderItem={renderItem}
          horizontal={false}
          keyExtractor={(item) => item.moeda}
        />
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
  },
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
export default DepositoScreen