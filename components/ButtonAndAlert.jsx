import { View, Button, Alert } from 'react-native';
import React from 'react';
import globalStyle from '../public/js/globalStyle';

export default function() {
  function update() {
    Alert.alert(
      '更新提示',
      '发现新版本，是否现在更新',
      // 三个按钮
      [
        {
          text: '稍后再试',
          onPress: () => Alert.alert('操作成功！')
        },
        {
          text: '取消',
          onPress: () => Alert.alert('操作成功！')
        },
        {
          text: '确认',
          onPress: () => Alert.alert('操作成功！')
        }
      ]
    )
  }

  return (
    <View style={globalStyle.container}>
        <Button title='更新提示' onPress={() => update()} color='#3aa675'></Button>
    </View>
  )
}
