import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { Users } from "./Users";
import { UserDetails } from "./UserDetails";

const StackNavigator = createStackNavigator();

const UserStack = () => {
  return (
      <StackNavigator.Navigator>
        <StackNavigator.Screen name={'Users'} component={Users}/>
        <StackNavigator.Screen name={'User Details'} component={UserDetails}/>
      </StackNavigator.Navigator>
  )
};
export default UserStack;
