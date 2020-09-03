import React, { Component } from 'react'
import { View,Text } from 'react-native'
class App extends Component{
    constructor(props){
        super(props)
        this.state={
            text:"hello"
        }
    }
    render(){
        return(
            <View>
                <Text>{this.state.text}</Text>
                <Text>Hello, I have a book</Text>
            </View>
        )
    }
}
export default App;