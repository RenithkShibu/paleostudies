import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class ReasearchScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>research!</Text>
                <Text>all the reasearch papers are taken from reacearch gate and other plat forms so you will be provided with links and pdf</Text>
            </View>
        )
    }
}
