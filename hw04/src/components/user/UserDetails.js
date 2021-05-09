import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const UserDetails = ({route, navigation}) => {
    const {params: {data}} = route;

    useEffect(() => {
        navigation.setOptions({title: data.name});
    }, []);

    return <View>
              <Text>{data.username}</Text>
            <Text>{data.phone}</Text>
            <Text>{data.website}</Text>
    </View>;
};
export default UserDetails;

const styles = StyleSheet.create({});
