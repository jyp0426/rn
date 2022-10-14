import { View, Switch, StatusBar } from 'react-native';
import React, {useState} from 'react';
import globalStyle from '../public/js/globalStyle';

export default function() {
    const [hideStatusBar, setHideStatusBar] = useState(false);

    return (
        <View style={globalStyle.container}>
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
