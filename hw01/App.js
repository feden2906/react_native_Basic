import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Car from "./components/car";
// import {FlatList} from "react-native-web";


let cars = [
	{model: 'ferrari', edition: 2015, power: '220hp', color: 'red'},
	{model: 'toyota', edition: 2011, power: '180hp', color: 'black'},
	{model: 'chrysler', edition: 2012, power: '210hp', color: 'blue'},
	{model: 'honda', edition: 2017, power: '160hp', color: 'white'},
	{model: 'nissan', edition: 2019, power: '150hp', color: 'green'},
	{model: 'volvo', edition: 2016, power: '170hp', color: 'grey'},
	{model: 'hammer', edition: 2014, power: '250hp', color: 'hakki'},
	{model: 'renault', edition: 2015, power: '170hp', color: 'azure'},
	{model: 'mitsubishi', edition: 2013, power: '200hp', color: 'red'},
	{model: 'ford', edition: 2016, power: '180hp', color: 'blue'},
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
	  	data={cars}
		renderItem={({item}) => {
			console.log(item);
			return <Car item={item}/>;
		}}
	  />
    </View>
  );
}

const styles = StyleSheet.create({});
