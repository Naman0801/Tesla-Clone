import React from 'react'
import { Text, View, Pressable } from 'react-native'
import styles from './style';

const StyleBtn = ({ type, content, press }) => {
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const color = type === 'primary' ? '#FFF' : '#171A20';
    return (
        <View style={styles.btnCont}>
            <Pressable
                style={[styles.btn, { backgroundColor: backgroundColor }]}
                onPress={press}
            >
                <Text style={[styles.text, { color: color }]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default StyleBtn
