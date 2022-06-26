import React from "react";
import{View,Text,StyleSheet,SafeAreaView,StatusBar,Image}from 'react-native'

const colorGithub = "#010409"
const colorFontGithub = "#C9D1D9"
const imageProfileGithub ="https://avatars.githubusercontent.com/u/84642047?s=400&u=2c15c47ae1410aaff77f4cbddefa5b626776c56a&v=4"
const App = () =>{
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="ligt-content"  />
            <View style={style.content}>
                <Image source={{uri: imageProfileGithub}} style={style.avatar} accessibilityLabel="imagem do perfil"/>
                <Text style={[style.defaultText,,style.name]}>Gustavo Batista</Text>
                <Text style={[style.defaultText,,style.descricao]}>Estudandante Ciência da computação</Text>
            </View>
          
        </SafeAreaView>
    );
}

export default App;

const style = StyleSheet.create({
container:{
    backgroundColor:colorGithub,
    flex:1,
    justifyContent:"center",
},
content:{
    alignItems:"center",
    padding: 20,

},
avatar:{
    height: 200,
    width: 200,
    borderRadius:100,
    borderColor:'white',
    borderWidth:2,
},
defaultText:{
    color:"white",
},
name:{
    fontWeight:'bold',
    fontSize:24,
},
descricao:{
    color:colorFontGithub,
},

});