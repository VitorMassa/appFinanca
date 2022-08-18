import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Lucas Silva"/>
      <Balance balances={2000.10} lowerbalances={1400.50}/>
      <Text style={styles.title}>Ultimos Gastos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    
  },

  title:{
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 14,
      marginRight: 14,
      marginTop: 14,
      alignSelf: 'center',
  }
})