import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const Post = (props) => {
    const {item, nav} = props;

    return <View style={[styles.container]}>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Button
                  title={'...details'}
                  onPress={() => {
                      nav.navigate('Post Details', {data: item});
                  }}
              />
           </View>;
};
export default Post;

const styles = StyleSheet.create({
    container: {
        height: 100,
        marginBottom: 3,
        backgroundColor: 'palegreen'
    }
});
