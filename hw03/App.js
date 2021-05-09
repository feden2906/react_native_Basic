import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import PostDrawer from "./src/components/post/PostDrawer";
import UserDrawer from "./src/components/user/UserDrawer";

const BottomTabNavigator = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator.Navigator
          // tabBarOptions={{tabStyle: {justifyContent: 'center', alignItems: 'center'}}}
      >
        <BottomTabNavigator.Screen name={'posts'} component={PostDrawer}/>
        <BottomTabNavigator.Screen name={'users'} component={UserDrawer}/>
      </BottomTabNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
