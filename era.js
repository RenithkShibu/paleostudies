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
                <Text>era!</Text>
                <Text>The earths past has been devided into many parts
                    * they are Eons, ERAs, Periods, etc 
                    * in which there are four eons Hadean,Archean,Protherzoic,Phanerozoic 
                    * out of the four we mostly study Phanerozoic eon
                    * Phanerozoic is then devided into eras 
                    * there are three eras 
                    * Caenozoic the era in which we live in 
                    * Mesozoic the era of the dinosaurs
                    * Plaeozoic the era of the amphibian repetiles
                    * each era is devided into different periods 
                    * Caenozoic-
                               * Paleogene period
                               *  Neogene period
                               * Quaternary period
                    * Mesozoic-
                              * cretaceous period
                              * jurassic period
                              * triassic period 
                    * plaeozoic-
                               * permian period
                               * carboniferous period
                               * devonian period
                               * silurian period
                               * ordivician period
                               * cambrian period      
                </Text>
            </View>
        )
    }
}
