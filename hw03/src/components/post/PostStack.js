import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Posts from "./Posts";
import PostDetails from "./PostDetails";

const StackNavigator = createStackNavigator();

const PostStack = () => {
    return (
            <StackNavigator.Navigator>
                <StackNavigator.Screen name={'Posts'} options={{title: 'POSTS OF JUSTICE FOR ALL'}} component={Posts}/>
                <StackNavigator.Screen name={'Post Details'} options={{title: 'Details'}} component={PostDetails}/>
            </StackNavigator.Navigator>
    )
};
export default PostStack;

const styles = StyleSheet.create({});
