import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Users from "./Users";
import UserDetails from "./UserDetails";

const StackNavigator = createStackNavigator();

const UserStack = () => {
    return (
        <StackNavigator.Navigator>
            {/*При рендеринге Опшнс.Тайтл перебивает нейм компоненты*/}
            <StackNavigator.Screen name={'Users'} options={{title: 'USERS ON THE STORM'}} component={Users}/>
            {/*В данном случае Опшнс.Тайтл - дисэйблд*/}
            <StackNavigator.Screen name={'User Details'} options={{title: 'Details'}} component={UserDetails}/>
        </StackNavigator.Navigator>
    )
};
export default UserStack;

const styles = StyleSheet.create({});
