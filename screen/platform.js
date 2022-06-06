import React,{useState,useEffect} from 'react';
import {StyleSheet, View, Text,Image,TextInput,Button,alert,ScrollView,TouchableOpacity} from 'react-native';
import { LogBox } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Elevations from 'react-native-elevation';
function PlatForm({ navigation }) {
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, []);

    const [rating, setRating] = useState(0);
    return(
<ScrollView style={styles.container}>
<View style={[styles.view,{
height: 60,
width: '95%',

paddingRight:10,


borderRadius:9,
marginLeft:10,
marginTop:4
}]}>
 <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
<Image source={require("../assets/navbar.png")}
      style={styles.stile}></Image>
      </TouchableOpacity>
      <Text> </Text>
      <View style={styles.stile}>
     <Image source={require("../assets/wallet.png")}
      ></Image>
     
      <Text style={styles.test}>12$ {'\n'} Real Qzeto</Text>
      </View>
      <View style={styles.stile}>
      <Image source={require("../assets/dollar.png")} ></Image>
      <Text style={styles.test}>3$ {'\n'} Free Qzeto</Text>
      </View>
      <View style={styles.stile}>
      <Image source={require("../assets/hand-gesture.png")}></Image>
      <Text style={styles.test}>0$ {'\n'}Bonus Qzeto </Text>
      </View>
      <Image source={require("../assets/Group.png")}></Image>
      </View>
      <View style={styles.elev}>
            <Text style={styles.main}> Platform Settings</Text>
            <View style={styles.first}>
              <View style={{paddingTop:1}}>
                  <Text style={styles.circle}>1</Text>
                  </View>
            <Text style={[styles.point,{paddingHorizontal:6}]}>Tax and Comission</Text>
            </View>
            <Text style={styles.texts}>Platform comission</Text>
<View style={styles.horiz}>
<View style={styles.inputBox}>
  
<TextInput placeholder='Enter value' keyboardType='numeric' style={styles.ques}  ></TextInput>
<View style={{paddingTop:4}} >
<Feather name='percent' size={20}  color='#515151'/>
</View>
 </View>
 </View>
 <Text style={styles.texts}>Schedular comission</Text>
<View style={styles.horiz}>
<View style={styles.inputBox}>
  
<TextInput placeholder='Enter value' keyboardType='numeric' style={styles.ques}  ></TextInput>
<View style={{paddingTop:4}} >
<Feather name='percent' size={20}  color='#515151'/>
</View>
 </View>
 </View>
 <Text style={styles.texts}>Applicable tax(If winning amount is more than equal to 1000 Inr)</Text>
<View style={styles.horiz}>
<View style={styles.inputBox}>
  
<TextInput placeholder='Enter value' keyboardType='numeric' style={styles.ques}  ></TextInput>
<View style={{paddingTop:4}} >
<Feather name='percent' size={20}  color='#515151'/>
</View>
 </View>
 </View>
 <View style={styles.first}>
              <View style={{paddingTop:1}}>
                  <Text style={styles.circle}>2</Text>
                  </View>
            <Text style={[styles.point,{paddingHorizontal:6}]}>Daily qzetos</Text>
            </View>
            <Text style={styles.texts}>Free Qzetos</Text>
<View style={styles.horiz}>
<View style={styles.inputBox}>
  
<TextInput placeholder='10' keyboardType='numeric' style={styles.ques}  ></TextInput>
<View style={{paddingTop:6}} >
<Image source={require("../assets/Attach.png")}
      ></Image>
</View>
 </View>
 </View>
 <Text style={styles.texts}>Real Qzetos</Text>
<View style={styles.horiz}>
<View style={styles.inputBox}>
  
<TextInput placeholder='10' keyboardType='numeric' style={styles.ques}  ></TextInput>
<View style={{paddingTop:6}} >
<Image source={require("../assets/Attach.png")}
      ></Image>
</View>
 </View>
 </View>
 <Text style={styles.texts}>Bonus Qzetos</Text>
<View style={styles.horiz}>
<View style={styles.inputBox}>
  
<TextInput placeholder='10' keyboardType='numeric' style={styles.ques}  ></TextInput>
<View style={{paddingTop:6}} >
<Image source={require("../assets/Attach.png")}
      ></Image>
</View>
 </View>
 </View>
 <View style={styles.first}>
              <View style={{paddingTop:1}}>
                  <Text style={styles.circle}>3</Text>
                  </View>
            <Text style={[styles.point,{paddingHorizontal:6}]}>Refferal qzetos</Text>
            </View>
            <Text style={styles.texts}>Free Qzetos</Text>
<View style={styles.horiz}>
<View style={styles.inputBox}>
  
<TextInput placeholder='10' keyboardType='numeric' style={styles.ques}  ></TextInput>
<View style={{paddingTop:6}} >
<Image source={require("../assets/Attach.png")}
      ></Image>
</View>
 </View>
 </View>
 <Text style={styles.texts}>Real Qzetos</Text>
<View style={styles.horiz}>
<View style={styles.inputBox}>
  
<TextInput placeholder='10' keyboardType='numeric' style={styles.ques}  ></TextInput>
<View style={{paddingTop:6}} >
<Image source={require("../assets/Attach.png")}
      ></Image>
</View>
 </View>
 </View>
 <Text style={styles.texts}>Bonus Qzetos</Text>
<View style={styles.horiz}>
<View style={styles.inputBox}>
  
<TextInput placeholder='10' keyboardType='numeric' style={styles.ques}  ></TextInput>
<View style={{paddingTop:6}} >
<Image source={require("../assets/Attach.png")}
      ></Image>
</View>
 </View>
 </View>
 <View style={styles.buttonView}>
            <TouchableOpacity style={styles.touchableStyle} onPress={() => navigation.push("SpinWheel")}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            </View>

            </View> 
      </ScrollView>
)
};
const styles=StyleSheet.create({
   container:{
      flex:1,
      backgroundColor:'#F8F8F8',
      marginTop:5,
       },
       view:{
      flexDirection:'row',
      paddingTop:14,
      paddingHorizontal:5,
      alignItems:'flex-start',
      justifyContent:'space-around',
      backgroundColor:'#ffffff',
      margin:8,
      ...Elevations[4],
       },
       stile:{
        alignItems:'center',
        flexDirection:"row",
       },
       test:{
      
           fontSize:10,
           paddingRight:5,
           alignItems:'flex-start',
        },
        main:{
         color:'#00459E',
         fontSize:24,
        },
        elev:{
         paddingTop:10,
         flex:1,
         marginTop:8,
         backgroundColor:'white',
         marginHorizontal:10,
         margin:8,
         ...Elevations[4] 
        },
      point:{
         fontSize:14,
         paddingHorizontal:2,
    },
    first:{
     flexDirection:'row',
     paddingHorizontal:8,
     paddingTop:12
   },
   circle:{
      width: 19,
      height: 19,
      borderRadius: 19 / 2,
      backgroundColor: 'blue',
      color:'white',
      textAlign:'center',
      textAlignVertical:'center'   
 },
 horiz:{
   paddingHorizontal:10,
   paddingTop:4,
},
inputBox:{
 flexDirection:'row',
 width:"100%",
 paddingHorizontal:1,
 borderWidth:1,
 borderRadius:5,
 height:30,
 borderColor:'#858585'
 
}, 
texts:{
   paddingHorizontal:12,
   paddingTop:9,
   color:'#515151',
 },
 ques:{
   width:'92%',
   paddingHorizontal:5
 },
 buttonView:{
   marginHorizontal:250,
   width:"100%",
   paddingTop:50,
   paddingBottom:10
 },
 touchableStyle:{
   backgroundColor:'#00459E',
   borderRadius:5,
   width:'20%',
   height:"20%"
 },
 buttonText:{
   color:'white',
   textAlign:'center',
   paddingTop:4
 }
});
export default PlatForm;
