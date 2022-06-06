import React,{useState,useEffect} from 'react';
import {StyleSheet, View, Text,Image,TextInput,Button,alert,ScrollView,TouchableOpacity} from 'react-native';
import { LogBox } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Elevations from 'react-native-elevation';
function Performance({ navigation }) {
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
        
        <Text style={styles.performanceText}>Performance Report</Text>
        <View style={{flexDirection:'row'}}>
        <View style={styles.innerFirstView}>
              <View style={styles.innerStyleAgain}>
              <Text style={styles.newCircleView}>10</Text>
          <Text style={styles.innerText} >   Total{'\n'} Questions</Text>
          </View>
          </View>
          <View style={styles.innerFirstView}>
          <View style={[styles.innerStyleAgain,{marginLeft:6}]}>
              <Text style={[styles.newCircleView,{color:"#FFD279",borderColor:'#FFD279'}]}>10</Text>
          <Text style={styles.innerText}>Attempted {'\n'} Questions</Text>
          </View>
          </View>
          
          </View>
          <View style={{flexDirection:'row'}}>
        <View style={styles.innerViewAgain}>
        <View style={styles.innerStyleAgain}>
              <Text style={[styles.newCircleView,{color:"#66ECC4",borderColor:'#66ECC4'}]}>7</Text>
          <Text style={styles.innerText}>   Correct{'\n'} Questions</Text>
          </View>
          </View>
          <View style={styles.innerViewAgain}>
              <View style={[styles.innerStyleAgain,{marginLeft:6}]}>
              <Text style={[styles.newCircleView,{color:"#FFA400",borderColor:'#FFA400'}]}>7th</Text>
          <Text style={styles.innerText}>   Your {'\n'} Position</Text>
          </View>
          </View>
          
          </View>
          <View style={styles.outerStyle}>
              
          <Text style={styles.outerView}>Your Score</Text>
          <Text style={styles.newOuterCircle}>5/10</Text>
          </View>
        <Text style={styles.performanceText}>Submission</Text>
        <View style={styles.textView}>
        
      <View style={styles.padTop}>
      <View style={styles.pickedDateContainer}>
              
              <Text style={styles.pickedDate}>QNo.1:Which of the following{'\n'}procedure 
              can be used dummy-variable regression modal?</Text>
              <View>
              <Text style={styles.stlishText}><Text style={{fontWeight:'600',color:'#00459E'}}>Answer:</Text> Linear combination</Text>
              <View style={styles.imageStyle}>
              <Image source={require("../assets/Right.png")}></Image>
              </View>
              </View>
      </View>
   </View>
      <View style={styles.padTop}>
      <View style={[styles.pickedDateContainer,{backgroundColor:'#FFEEE9',borderColor:'#C77E68'}]}>
              
              <Text style={styles.pickedDate}>QNo.1:Which of the following{'\n'}procedure
              can be used dummy-variable regression modal?</Text>
              <View>
              <Text style={styles.stlishText}><Text style={{fontWeight:'600'}}>Answer:</Text> Linear combination</Text>
              <View style={styles.imageStyle}>
              <Image source={require("../assets/Wrong.png")}></Image>
              </View>
            </View>
            </View>
      </View>
      
      <View style={styles.padTop}>
      <View style={styles.pickedDateContainer}>
              
              <Text style={styles.pickedDate}>QNo.1:Which of the following{'\n'}procedure
              can be used dummy-variable regression modal?</Text>
              <View >
              <Text style={styles.stlishText}><Text style={{fontWeight:'600'}}>Answer:</Text> Linear combination</Text>
             <View style={styles.imageStyle}>
            <Image source={require("../assets/Right.png") }></Image>
            </View>
            
            </View>
              </View>
      </View>
      
        </View>
        <View style={styles.buttonView}>
            
            <TouchableOpacity style={styles.Touchable}>
              <Text style={styles.finalText}>Leave Quiz</Text>
            </TouchableOpacity>

            <Text style={styles.pageNumberText}>4/10</Text>
            <TouchableOpacity style={[styles.Touchable,{width:65,marginLeft:65,backgroundColor:'#1DB95B'}]}
            onPress={() => navigation.push("QuizOption")}>
              <Text style={styles.finalText}>Next</Text>
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
      innerFirstView:{
        backgroundColor:'white',
        borderRadius:15,
        marginTop:22,
        height:30,
        width:152,
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
       buttonView:{
        flexDirection:'row',
        paddingTop:100,
        paddingBottom:10,
    
     },
     performanceText:{
        paddingTop:30,
        paddingHorizontal:16,
        fontSize:20,
        fontWeight:'600'
     },
     innerStyleAgain:{
        
      flexDirection:'row',
      alignItems:'center',
      paddingHorizontal:8,
      paddingTop:6,
      backgroundColor:'#304F78',
      height:70,
      borderRadius:7,
      marginLeft:2,
      width:'100%'

    },
    newCircleView:{
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#304F78',
        color:'white',
        fontSize:18,  
        textAlignVertical:'center',
        textAlign:'center',
        margin:3,
        borderColor:'white',
        borderWidth:3,
        
             
     },
     innerViewAgain:{
        backgroundColor:'white',
        borderRadius:15,
        marginTop:60,
        height:30,
        width:152,
        marginLeft:10,  
     },
     outerStyle:{
        
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:12,
       
        backgroundColor:'#304F78',
        height:70,
        borderRadius:7,
        marginLeft:12,
        marginRight:13,
        marginTop:60
        
  
      },
      outerView:{
        fontSize:22,
        color:'white'
      },
      newOuterCircle:{
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        fontSize:18,  
        textAlignVertical:'center',
        textAlign:'center',
        margin:3,
        borderColor:'white',
        color:"black",
        backgroundColor:'white',
        marginLeft:120,
        marginTop:5,

        
             
     },
     innerText:{
        color:'white',
        fontSize:16
     },
     pickedDateContainer: {
   
        borderRadius: 10,
        borderWidth:1,  
        width:"97%",
        marginLeft:5,
        backgroundColor: '#E9FFE9',
        borderColor:'#CCCCCC',
        color:'#CCCCCC',
        borderColor:'#68C768'
    
      },
      pickedDate: {
        fontSize: 18,
        color: 'black',
        paddingHorizontal:5,
        paddingTop:3,
        height:90,
        fontWeight:'bold',
    
      },
      stlishText:{
       color: '#00459E',
       paddingLeft:5,
       paddingBottom:10,
       fontSize:18,
       fontWeight:'400',
    
       
      },
    
    padTop:{
        paddingTop:10
    },
    textView:{
        backgroundColor:' #FCFCFC' ,
        borderWidth:1,
        borderRadius:10,
        marginTop:30,
        marginHorizontal:5,
        borderColor:'#ECECEC',
        paddingBottom:10
    },
    imageStyle:{
        position:'absolute',
        left:270,
        top:-5
    },
  
});
export default Performance;