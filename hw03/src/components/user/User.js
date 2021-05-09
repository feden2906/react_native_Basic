import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const User = (props) => {
    const { item, nav } = props;

    return <View style={[styles.container]}>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
              <Button
                  title={'...details'}
                  onPress={() => {
                      nav.navigate('User Details', {data: item}); // as the name of screen only & 'data' - assign by yourself
                  }}
              />
           </View>;
};
export default User;

const styles = StyleSheet.create({
    container: {
        height: 100,
        marginBottom: 3,
        backgroundColor: 'palegreen'
    }
});
