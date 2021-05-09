import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const PostDetails = ({navigation, route}) => {
    const {params: {data}} = route;

    useEffect(() => {
        navigation.setOptions({title: data.title});
    },[])
    return <View>
              <Text>{data.body}</Text>
           </View>;
};
export default PostDetails;

const styles = StyleSheet.create({});
