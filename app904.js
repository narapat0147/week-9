import React from 'react'
import {View,Text,Image} from 'react-native'

const typeBanana=(props)=>{
  return(
    <View>
      <Text>Type {props.name}</Text>
    </View>
  )
}

const Banana=()=>{
  let pic={
    uri:'https://img1.mashed.com/img/gallery/heres-what-happens-when-you-eat-a-banana-every-day/intro-1596497583.jpg'
  }
  return(
    <View style={{backgroundColor:"orange",alignItems:"center"}}>
      <Image
       style={{width:250,height:250,marginTop:20}}
       source={pic} />
      <Text>Hello, I am a Banana</Text>
      <typeBanana name='1. Cavendish Banana' />
    </View>
  )
}
export default Banana;