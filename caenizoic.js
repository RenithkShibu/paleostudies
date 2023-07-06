import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class EraScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>cenozoic ERA!</Text>
                <Text>IT is Earth's current geological era
                    cenozoic era is the age of the mamals and also the period in which humans came to existance and evolved</Text>
            </View>
        )
    }
}
