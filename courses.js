import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class CourseScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>courses!</Text>
                <Text>here are all the courses we could find on paleontology and related subjects which are free of cost on the web</Text>
            </View>
        )
    }
}
