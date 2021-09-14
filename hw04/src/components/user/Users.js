import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { getUsers } from "../../api/userAPI";
import { User } from "./User";


export const Users = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  const takeData = async () => {
    const users = await getUsers();
    setUsers(users);
  }

  useEffect(() => {
    takeData();
  }, [])

  return (
      <View>
        <FlatList
            data={users}
            renderItem={({ item }) => <User nav={navigation} item={item}/>}
            keyExtractor={({ id }) => id.toString()}
            // horizontal={true} // if u wanna place components horizontally
        />
      </View>
  )
};

const styles = StyleSheet.create({});
