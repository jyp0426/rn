import { StyleSheet, View, TextInput, Button, Dimensions } from 'react-native';
import React, { useState } from 'react';
import globalStyle from '../public/js/globalStyle';

export default function Input() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = function loginHandler() {
        if (username !== ''
            && username === 'admin'
            && password !== ''
            && password === '88888888'
        ) {
            alert('登录成功！');
        } else {
            alert('登录失败！');
        }
    }

    return (
        <View style={globalStyle.container}>
            <TextInput
                style={styles.input}
                placeholder='用户名'
                value={username}
                onChangeText={val => setUsername(val)}
            />
            <TextInput
                secureTextEntry
                style={styles.input}
                placeholder='密码'
                value={password}
                onChangeText={val => setPassword(val)}
            />
            <TextInput
                style={styles.input}
                placeholder='验证码'
                keyboardType='number-pad'
            />
            <View
                style={{
                    width: Dimensions.get('window').width - 100,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
            >
                <Button
                    title='登录'
                    onPress={() => loginHandler()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: Dimensions.get('window').width - 100,
        height: 50,
        marginHorizontal: 50,
        marginVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#eee',
    },
})
