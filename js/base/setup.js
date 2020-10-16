import React,{Component} from 'react'
import {View,StyleSheet,Text} from 'react-native'
import  {createAppContainer} from 'react-navigation'
import {NavigationContainer} from  '@react-navigation/native'
import {createStackNavigator} from  '@react-navigation/stack'
const AppStack=createStackNavigator({
    Home:{screen:Home},

},{mode:'modal',headerMode:'none'});
const RootNavigator=createStackNavigator({
    Welcome:Welcome,
    App:AppStack
},{
    initialRouteName:'Welcome'
})
export default createAppContainer(RootNavigator)
