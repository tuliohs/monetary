import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Text, View } from '../components/Themed';
import { cambio, TCambio } from '../constants/Config';

export default function TabTwoScreen() {

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text >{item.moeda + "   " +
          item.cotacao + "   " +
          item.iof + "   " +
          item.spread} </Text>
      </View>
    )
  }

  return (
    <View  >
      <FlatList
        ListHeaderComponent={
          <View style={styles.item}>
            <Text >{"moeda   cotacao  iof  spread"} </Text>
          </View>
        }
        data={cambio}
        renderItem={renderItem}
        horizontal={false}
        keyExtractor={(item) => item.moeda}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
