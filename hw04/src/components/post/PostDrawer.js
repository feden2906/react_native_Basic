import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import Template from "../template/Template.";
import PostStack from "./PostStack";

const DrawerNavigator = createDrawerNavigator();


const PostDrawer = () => {
    return (
        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen name={'PostStack'} options={{title: 'Featurable Posts'}} component={PostStack}/>
            <DrawerNavigator.Screen name={'Template'} options={{title: 'Unbeatable Template'}} component={Template}/>
        </DrawerNavigator.Navigator>
    )
};
export default PostDrawer;

const styles = StyleSheet.create({});
