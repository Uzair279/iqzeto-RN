import React,{useState,useEffect} from 'react';
import {StyleSheet, View, Text,Image,TextInput,Button,alert,ScrollView,TouchableOpacity} from 'react-native';
import { LogBox } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Elevations from 'react-native-elevation';
function QuizOption({ navigation }) {
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
<Image source={require("../assets/navbar.png")}
      style={styles.stile}></Image>
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
      <View style={styles.blueView}>
       <View style={styles.blueBack}>
          
          <Text style={styles.blueText}> This is quiz name</Text>
          <View style={{flexDirection:'row'}}>
          <View style={styles.innerView}>
              <View style={styles.innerStyle}>
          <Image source={require("../assets/Topper.png")}></Image> 
          <Text style={{paddingHorizontal:6,}}>Prize: 500 INR</Text>
          </View>
          </View>
          <View style={[styles.innerView,{marginLeft:35},]}>
          <View style={styles.innerStyle}>
          <Image source={require("../assets/Participant.png")}></Image> 
          <Text style={{paddingHorizontal:6,}}>Participants: 8</Text>
          </View>  
          </View>
    
      </View>
      </View>
        </View>
        
        
        <View style={styles.lightBlueView}>
        <View style={styles.circle}>
            <Text style={styles.circleText}>40</Text>
        </View>
            <Text style={styles.lightBlueText}>The___of the sky is blue</Text>
           
        </View>
        <Text style={styles.simpleView}>Select correct option </Text>
        <View style={styles.pad}>
        <TouchableOpacity style={styles.touch}>
            <Text style={styles.opt}>Option</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.squareDirection}>
        
       
              <TextInput placeholder='Changing the refernce group' placeholderTextColor='black' style={styles.textinput}>
  
              </TextInput>
              <View style={styles.squareButton}>
              
              <Text style={[styles.squre,{backgroundColor: "#EEC907",}]}>A</Text>
              </View>
              </View>
              <View style={styles.squareDirection}>
           
              <TextInput placeholder='Linear combination' placeholderTextColor='black' style={styles.textinput}></TextInput>
              <View style={styles.squareButton}>
              <Text style={[styles.squre,{backgroundColor: "#32CD32",}]}>B</Text>
              
              </View>
              </View>
              <View style={styles.squareDirection}>
   
              <TextInput placeholder='Standardization' placeholderTextColor='black' style={styles.textinput}></TextInput>
              <View style={styles.squareButton}>
              <Text style={[styles.squre,{backgroundColor: "#42BA96",}]}>C</Text>
              
              </View>
              </View>
              <View style={styles.squareDirection}>
        
              <TextInput placeholder='Not possible' placeholderTextColor='black' style={styles.textinput}></TextInput>
              <View style={styles.squareButton}>
              <Text style={[styles.squre,{backgroundColor: "#f18507",}]}>D</Text>
              
              </View> 
              </View>
        <View style={styles.buttonView}>
            
            <TouchableOpacity style={styles.Touchable}>
              <Text style={styles.finalText}>Leave Quiz</Text>
            </TouchableOpacity>

            <Text style={styles.pageNumberText}>4/10</Text>
            <TouchableOpacity style={[styles.Touchable,{width:65,marginLeft:65,backgroundColor:'#1DB95B'}]}
            onPress={() => navigation.push("QuizColumn")}>
              <Text style={styles.finalText}>Save</Text>
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
         borderRadius:10,
         marginTop:8,
         backgroundColor:'white',
         marginHorizontal:10,
         margin:8,
         ...Elevations[4] 
        },
      blueView:{
        paddingTop:10,
        paddingHorizontal:12,
      },
      blueBack:{
        backgroundColor:'#00459E',
        height:108,
        borderRadius:7,
      },
      blueText:{
        color:'white',
        fontSize:18,
        padding:5,
      },
      innerView:{
        backgroundColor:'white',
        borderRadius:15,
        marginTop:22,
        height:30,
        width:132,
        marginLeft:10,
      },
      innerStyle:{
          display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:10,
        paddingTop:6

      },
      lightBlueView:{
        backgroundColor:'#F1FFFE',
        marginTop:50,
        height:114,
        paddingHorizontal:12,
        borderRadius:7,
        borderWidth:1,
        borderColor:'#77BEC8',
        marginHorizontal:12
      },
      circle:{
        width: 44,
        height: 44,
        borderRadius: 44 / 2,
        backgroundColor: 'white',
        borderColor:'#AF4242',    
        borderWidth:1,
        marginLeft:130,
  
        position:'absolute',
        top:-25,
        left:5
        
           
   },
   lightBlueText:{
    fontSize:20,
    textAlign:'center',
    paddingTop:50
   },
   circleText:{
    textAlign:'center',
    paddingTop:6,
    fontSize:21
   },
   simpleView:{
    textAlign:'center',
    color:'#989898',
    paddingTop:19,
    fontSize:21
   },
   buttonView:{
    flexDirection:'row',
    paddingTop:100,
    paddingBottom:10,

 },
 

 Touchable:{
  backgroundColor:'#B92F1D',
  borderRadius:10,
  height:37,
  marginHorizontal:12,
  width:110,
 },
 finalText:{
  color:'white',
  textAlign:'center',
  fontSize:16,
  textAlign:'center',
  paddingTop:5
 },
 pageNumberText:{
    paddingTop:9,
    color:'#777777',
    paddingLeft:35
 },
 opt:{
  color:'white',
  paddingHorizontal:1,
  fontSize:18,
  paddingTop:3
  
},
touch:{
  backgroundColor:'#00459E',
  borderRadius:6,
  height:35,
  textAlignVertical:'center' ,
  paddingHorizontal:5
},
pad:{
  paddingTop:20,
  paddingHorizontal:12
},
squareButton:{
  paddingTop:15,
  
 },
 squre:{
    width: 35,
    height: 37,
    
    color:'white',
    borderRadius:5,
    paddingHorizontal:10,
    fontSize:20,
    position:'absolute',
    top:19
 },
 textinput:{
  borderWidth:0.1,
  height:37,
  marginTop:19,
  width:'100%',
  borderRadius:1,
  fontSize:18,
  paddingHorizontal:40,
  backgroundColor:'#DFDFDF'
 },
 squareDirection:{
  flexDirection:'row-reverse',
  paddingHorizontal:12
 }

});
export default QuizOption;