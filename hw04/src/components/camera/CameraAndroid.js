import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Pressable, TouchableHighlight} from 'react-native';
import {Camera} from "expo-camera";
import * as MediaLibrary from 'expo-media-library';

const CameraAndroid = () => {
    const [hasPermission, setPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [camera, setCamera] = useState(null);

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setPermission(status === 'granted');
        })();
    }, [])

    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>no access to camera</Text>;
    }

    async function takePicture() {
        if (hasPermission) {
            const picture = await camera.takePictureAsync(null);
            console.log(picture);
            await MediaLibrary.saveToLibraryAsync(picture.uri); // need sending to server
        }
    }

    function toggleBack() {
        setType(Camera.Constants.Type.back);
    }

    function toggleFront() {
        setType(Camera.Constants.Type.front);
    }

    return <View style={styles.container}>
                <Text>Camera page</Text>
                <View style={styles.cameraContainer}>
                    {/*не называть файлы и функции как библиотеки - автокомплит подтягивает не то, что нужно*/}
                    <Camera style={styles.fixedRatio} type={type} ref={(r) => setCamera(r)}/>
                    {/*работает на Pressable, или TouchableHighlight, но не работает на Button --- ???*/}
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {}}
                    >
                        <Text>take picture</Text>
                    </TouchableHighlight>
                    {/*getAlbumsAsync --- choose correct repo for picture savings*/}
                    <Button style={styles.button} title={'take picture'} onPress={takePicture}/>
                    <Button title={'toggle back'} onPress={toggleBack}/>
                    <Button title={'toggle front'} onPress={toggleFront}/>
                </View>
           </View>;
};
export default CameraAndroid;

const styles = StyleSheet.create({
    container: {
        flex: 1, // spreads whole width
        backgroundColor: 'palegreen',
        // marginTop: 24 // сместит весть контейнер вниз от статусБара
        paddingTop: 24 // сместит весть контент внутри контейнера вниз, статусБар останется внутри контейнера и примет его стили
    },
    cameraContainer: {flex: 1},
    fixedRatio: {flex: 1, aspectRatio: 1},
    button: { // не применяются к кнопкам, почему ??? -- этот же стиль применим к любому другому тегу
        padding: 10,
        width: 100,
        backgroundColor: 'silver',
        borderColor: "blue",
        borderWidth: 1,
        borderRadius: 5
    }
});
