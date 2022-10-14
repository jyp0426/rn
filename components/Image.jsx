import { View, Image } from 'react-native';
import React from 'react';
import styles from '../public/js/globalStyle';

export default function() {
  return (
    <View style={styles.container}>
        <Image
            style={{width: 100, height: 100}}
            // 加载本地图片
            source={require('../public/images/react_native_logo.png')}
        />
        <Image
            style={{width: 100, height: 100}}
            // 加载网络图片
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png'
            }}
        />
        <Image
            style={{width: 100, height: 100}}
            // 加载经过 base64 编码后的图片
            source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
            }}
        />
    </View>
  )
}
