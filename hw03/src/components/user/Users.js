import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, FlatList} from 'react-native';
import {getUsers} from "../../api/userAPI";
import User from "./User";

const Users = (props) => {
    console.log(props)
    const {navigation} = props;

    const [ users, setUsers ] = useState([]);

    async function takeData() { // take out separately
        const users = await getUsers();
        setUsers([...users]);
    }

    useEffect(() => {
        takeData();
    }, [])

  return <View>
            <FlatList
                data={ users }
                renderItem={({ item }) => <User nav={navigation} item={ item }/>}
                keyExtractor={ item => '' + item.id }
                // horizontal={true} // if u wanna place components horizontally
            />
         </View>;
};
export default Users;

const styles = StyleSheet.create({});
