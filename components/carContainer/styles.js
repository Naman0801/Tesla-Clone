import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
    bgImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
        position: 'absolute'
    },
    title: {
        fontSize: 45,
        fontWeight: '500',
    },
    subTitle: {
        fontSize: 16,
        color: '#5c5e62'
    },
    subTitleCTA: {
        textDecorationLine: 'underline',
    },
    btnsCont: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
    }
});

export default styles;