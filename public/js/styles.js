import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      backgroundColor: 'white'
    },
})

export default styles