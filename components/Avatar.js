import {ColorPropType, StyleSheet, Text, View } from 'react-native';
import propTypes from 'prop-types';
import React from 'react';



export default function ({ size, backgroundColor, initials }) {
    const style = {
        width: size,
        height: size,
        borderRadius: size/2,
        backgroundColor,
    }

    return ( 
    <View style= {[styles.container, style]}>
    <Text style={styles.text}> {initials}</Text>
    </View>
        );
}

const styles = StyleSheet.create({
    container : {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text : {
        color: 'white',
    },
});

