import React from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import CarContainer from '../carContainer/CarContainer';

const CarsList = () => {
    return (
        <View style={{ width: '100%' }}>
            <FlatList
                data={carsData}
                snapToAlignment='start'
                decelerationRate='fast'
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <CarContainer
                        keyExtractor={(item) => item.title}
                        title={item.title}
                        tagline={item.tagline}
                        taglineCTA={item.taglineCTA}
                        img={item.img}
                    />
                )}
            />
        </View>
    )
}

const carsData = [
    {
        title: 'Model S',
        tagline: 'Starting From $50,000',
        img: require('../../assets/images/ModelS.jpeg')
    },
    {
        title: 'Model 3',
        tagline: 'Order Online For',
        taglineCTA: 'Touchless Delivery',
        img: require('../../assets/images/Model3.jpeg')
    },
    {
        title: 'Model X',
        tagline: 'Order Online For',
        taglineCTA: 'Touchless Delivery',
        img: require('../../assets/images/ModelX.jpeg')
    },
    {
        title: 'Model Y',
        tagline: 'Starting From $70,000',
        img: require('../../assets/images/ModelY.jpeg')
    }
]

export default CarsList
