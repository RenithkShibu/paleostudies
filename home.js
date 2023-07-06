import React from "react";
import {View,Text,TouchableOpacity,ImageBackground} from "react-native";
export default class Home extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>PaleoStudies</Text>
                    </View>
                    <TouchableOpacity stye={{flex:0.2,MarginTop:50}}onPress={()=>(this.props.navigation.navigate("research"))}>
                        <Text>research</Text>
                        </TouchableOpacity>
                        <TouchableOpacity stye={{flex:0.2,MarginTop:50}}onPress={()=>(this.props.navigation.navigate("era"))}>
                        <Text>era</Text>
                        </TouchableOpacity>
                        <TouchableOpacity stye={{flex:0.2,MarginTop:50}}onPress={()=>(this.props.navigation.navigate("courses"))}>
                        <Text>courses</Text>
                        </TouchableOpacity>

                    </ImageBackground>
         </View> )
    }
}
