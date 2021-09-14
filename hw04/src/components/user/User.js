import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export const User = (props) => {
  const { item, nav } = props;

  return <View style={styles.container}>
    <Text>{item.name}</Text>
    <Text>{item.email}</Text>
    <Button
        title={'details'}
        onPress={() => {nav.navigate('User Details', { data: item })}}
    />
  </View>;
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginBottom: 3,
    backgroundColor: 'palegreen'
  }
});
