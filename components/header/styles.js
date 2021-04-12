import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerCont: {
        position: 'absolute',
        top: 50,
        width: '100%',
        zIndex: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain',
    },
    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    }
})

export default styles;