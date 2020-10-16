/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
var forge=require('node-forge');
var md5=require('md5')
function HomeScreen(){
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>这是首页</Text>
    </View>
  )
}
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
const Stack=createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
var md=forge.md.md5.create()
var tmp_str='{"from_user":"389","goodsn":"2018241","goodsname":"Z脉动蜜桃味600ml*","goodsnum":"12","key":"5751ec3e9a4feab575962e78e006250d","msg_id":"MSG_GOODS_STORE_NUM","msg_type":"response","reason":"这只是一个测试标注.......","sessionid":"c718f85f-99aa-4b9f-a13d-5883564d0e3d","sign":"F88499849C88DAB62AFEF90850DC6FEB","storeid":"729","user_id":"389"}'
// md.update(forge.util.encodeUtf8(tmp_str));
// var zhi=md.digest().toHex();
// console.log(zhi)
var md5_zhi=md5(tmp_str)
console.log(md5_zhi)
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
