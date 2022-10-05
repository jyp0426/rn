import { View, Switch, StatusBar } from 'react-native'
import React, {useState} from 'react'
import styles from '../public/js/styles'

export default function() {
    const [hideStatusBar, setHideStatusBar] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar 
                hidden={hideStatusBar}
                backgroundColor='#3aa675'
                barStyle={'light-content'}
            />
            <Switch 
                trackColor={{false: '#ddd', true: '#3aa675'}}
                thumbColor={hideStatusBar ? '#3aa675' : 'white'}
                value={hideStatusBar}
                onValueChange={() => setHideStatusBar(prev => !prev)}
            />
        </View>
    )
}