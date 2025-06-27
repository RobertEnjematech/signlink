import React from 'react';

import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { dashboardstyles } from '../styles/generalappstyles';

const image = require('../assets/icon3.png')
const you=require('../assets/icon2.png')

const Onboardingscreen: React.FC = ({navigation}) => {

  const handleSubmit = () => {
  
    navigation.replace('sign');
}

  return (
      <View style={dashboardstyles.container}>
          <Text style={{color:"#000",textAlign:"center",fontSize:40, fontWeight:"bold",marginTop:"10%"}}>
              SIGNLINK
          </Text>

      <TouchableOpacity onPress={handleSubmit} style={{ flex: 10, margin: "10%", marginTop: 20, backgroundColor: "#E35817", borderRadius: 20, shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25,
    shadowRadius: 3.84, justifyContent: "flex-start", alignItems: "center" }}>
        <View style={{ flex: 10, marginBottom: 0, backgroundColor: "#E35817", borderRadius: 20,flexDirection:"row"  }}>
   
        <Image source={image} style={{ width: "70%", height: "70%",marginTop:"12%",marginRight:"5%",borderRadius:20}} />
       
        
          </View></TouchableOpacity> 
          <TouchableOpacity style={{ flex: 10, margin: "10%", marginTop: 20, backgroundColor: "#E35817", borderRadius: 20, justifyContent: "flex-start", alignItems: "center" }}>
        <View style={{ flex: 10, marginBottom: 0, backgroundColor: "#E35817", borderRadius: 20,flexDirection:"row"  }}>
   
        <Image source={you} style={{ width: "70%", height: "70%",marginTop:"12%",marginRight:"5%"}} />
       
        
          </View></TouchableOpacity>
          
        
           
    </View>
  );
};


export default Onboardingscreen;
