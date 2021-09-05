import React from 'react';
import LottieView from 'lottie-react-native';
import {View} from "react-native"

export default class DoctorAnimation extends React.Component {
  render() {
    return (
      <View>
      
      <LottieView
     // source={require("doctor-waving.json")}
      source={require("../images/doctor-waving.json")}
    // source={require("../doctor-waving.json")}
    // source={("../images/doctor-waving.json")}


      style={{width:"80%"}}
      autoPlay loop />


      </View>
    )
  }
}
