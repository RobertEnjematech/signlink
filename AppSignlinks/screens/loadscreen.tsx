import React, {
  useEffect,
  useState,
} from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { dashboardstyles } from '../styles/generalappstyles';

const images = [
  require('../assets/demo1.png'),  // Replace with your own images
  require('../assets/demo2.png'),
  require('../assets/demo3.png'),
];

const Loadingscreen: React.FC = ({ navigation }) => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Cycle through images every second
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1000);

    // Navigate after 3 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
      navigation.replace('onboard');
    }, 9000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);


  return (
    <View style={ dashboardstyles .container}>

          <View style={{ margin:"6%", backgroundColor: "#E35817", height: "90%", width: "90%",borderRadius:20,justifyContent:"flex-start",alignItems:"center"}}>
              <Text  style={{color:"#fff", fontSize:15,fontWeight:"bold"}}>WELCOME TO </Text>
              <Text  style={{color:"#fff", fontSize:30,fontWeight:"bold",marginBottom:"24%"}}>SIGNLINK</Text>


<View style={{ height: "55%", width: "90%", borderRadius:20, backgroundColor:"#fff",overflow:"hidden"}}>

                  
<Image source={images[index]} style={styles.image} />
              </View>
              <Text  style={{color: "#fff", fontSize: 15, fontWeight: "bold",marginTop:"3%" }}>LOADING......</Text>

<Text  style={{color:"#fff", fontSize:15,fontWeight:"bold",marginTop:"10%"}}>WELCOME TO </Text>
              <Text  style={{color:"#fff", fontSize:30,fontWeight:"bold"}}>SIGNLINK</Text>

              
      </View>       

           
    </View>
  );
};


export default Loadingscreen;

const styles = StyleSheet.create({
image: {
    width: "100%",
    height: "100%",
    resizeMode: 'cover',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
  },
});