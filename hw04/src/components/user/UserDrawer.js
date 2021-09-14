import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import Template from "../template/Template.";
import UserStack from "./UserStack";

const DrawerNavigator = createDrawerNavigator();

export const UserDrawer = () => {
    return (
        <DrawerNavigator.Navigator>
            {/*При рендеринге Опшнс.Тайтл перебивает нейм компоненты*/}
            <DrawerNavigator.Screen name={'UserStack'} component={UserStack}/>
            <DrawerNavigator.Screen name={'Template'} options={{title: 'Unbeatable Template'}} component={Template}/>
        </DrawerNavigator.Navigator>
    )
};

const styles = StyleSheet.create({});
