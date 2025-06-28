import React from 'react';

import {
  Text,
  View,
} from 'react-native';

import CameraTensor from '@/backendLogic/handgesture';

import { dashboardstyles } from '../styles/generalappstyles';

const SigntoText: React.FC = () => {



  return (
      <View style={dashboardstyles.container2}>

<Text style={{color:"#000",textAlign:"center",fontSize:40, marginTop:"2%" ,fontWeight:"bold"}}>
              SIGNLINK
      </Text>
      
<View style={{  width:"83%",height:"60%", margin:"5%",marginLeft:"10%", backgroundColor: "#D9D9D9", borderRadius:30,overflow:"hidden",alignItems:"center"}}>
 
<CameraTensor/>
          </View>
   
      <View style={{backgroundColor:"#E35817",width:"83%",margin:"10%",height:"18%",marginTop:"2%", borderRadius:15,justifyContent:"center"}}>
        <Text style={{color:"white",fontWeight:"bold",textAlign:"center",fontSize:25}}>Good Evening,Welcome?</Text>
      </View>
          
        
           
    </View>
  );
};


export default SigntoText;