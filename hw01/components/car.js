import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, Button } from 'react-native';

const Car = ({item}) => {
    return <View >
        <Text style={[styles.main, styles.color]}>
            <Image
                style={styles.tinyLogo}
                source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png'
            }}/>
            {item.model} - {item.edition}
            <Button
                title={'...details'}
                onPress={() => console.log('press')}
            />
        </Text>
    </View>;
}
export default Car;

const styles = StyleSheet.create({
    main: {
        height: 70,
        width: '70%',
        marginBottom: 5
    },
    color: {
        color: 'red',
        backgroundColor: 'palegreen',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});
