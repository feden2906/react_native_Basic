import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostDrawer from "./src/components/post/PostDrawer";

import CameraAndroid from "./src/components/camera/CameraAndroid";
import { UserDrawer } from "./src/components/user/UserDrawer";

const BottomTabNavigator = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator.Navigator
          // tabBarOptions={{tabStyle: {justifyContent: 'center', alignItems: 'center'}}}
      >
        <BottomTabNavigator.Screen name={'posts'} component={PostDrawer}/>
        <BottomTabNavigator.Screen name={'users'} component={UserDrawer}/>
        <BottomTabNavigator.Screen name={'сamera'} component={CameraAndroid} options={{unmountOnBlur: true}}/>
      </BottomTabNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
