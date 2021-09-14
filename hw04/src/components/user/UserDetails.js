import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const UserDetails = ({ route, navigation }) => {
  const { name, username, phone, website } = route.params.data;

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  return <View>
    <Text>{username}</Text>
    <Text>{phone}</Text>
    <Text>{website}</Text>
  </View>;
};


const styles = StyleSheet.create({});
