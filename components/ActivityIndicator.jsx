import { View, ActivityIndicator, Platform } from 'react-native';
import React from 'react';
import globalStyle from '../public/js/globalStyle';

const { OS: os } = Platform;

export default function() {
    switch (os) {
        case 'android':
            alert('Android')
            break
        case 'ios':
            alert('IOS')
            break
        case 'macos':
            alert('MacOS')
            break
        case 'web':
            alert('Web')
            break
        case 'windows':
            alert('Windows')
            break
        default:
            break
    }

    return (
        <View style={globalStyle.container}>
            <ActivityIndicator color='#3aa675' size={'large'} />
            <ActivityIndicator color='#3aa675' size={100} />
        </View>
    )
}
