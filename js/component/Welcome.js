import React,{Component} from 'react'
import {View,StyleSheet,Text} from 'react-native'
export default class Welcome extends Component{
    constructor(props){
        super(props);

    }
   componentDidMount(): void {
        this.timer=setInterval(()=>{
            this.props.navigation.reset({index:0,routes:[{name:'Home'}]})
            console.log(this.props.navigation.reset('Home'))
        },4000)
   }
    componentWillUnmount(): void {
        this.timer&& clearInterval(this.timer)
    }

    render() {
        return (
            <View><Text>欢迎页面</Text></View>
        )
    }
}
