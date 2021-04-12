import React from 'react'
import { ImageBackground, View, Text } from 'react-native'
import StyleBtn from '../styleBtn/StyleBtn';
import styles from './styles';

const CarContainer = ({ title, tagline, taglineCTA, img }) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={img} style={styles.bgImg} />
            <View style={styles.titles}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>
                    {tagline}{' '}
                    <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
                </Text>
            </View>

            <View style={styles.btnsCont}>
                <StyleBtn type='primary' content='Custom Order' press={() => console.warn('prm')} />
                <StyleBtn type='secondary' content='Existing Inventory' press={() => console.warn('sec')} />
            </View>
        </View>
    )
}

export default CarContainer