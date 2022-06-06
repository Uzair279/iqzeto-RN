import React,{useState,useEffect} from 'react';
import {StyleSheet, View, Text,Image,TextInput,Button,alert,ScrollView,TouchableOpacity} from 'react-native';
import { LogBox } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'; 
import StarRating from 'react-native-star-rating-widget';
import Elevations from 'react-native-elevation';
function LeaderBoard({ navigation }) {
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
      <View style={styles.cont}>
      <Text style={styles.greenHeader}>Prize Pool-100000</Text>
      
      <View style={styles.newView}>
         <View style={styles.stiless}>
          <MaterialCommunityIcons name='format-list-bulleted-type' size={20}/>
      <Text style={styles.paddingHor}>Quiz Type</Text>
      <View style={styles.free}>
      <Text style={styles.textalign}>Free</Text>
      </View>
      
      <MaterialCommunityIcons name='clock-time-ten-outline' size={20} color='black' style={styles.icon}/>
      <Text style={styles.Durs}>Duration</Text>
      <View style={{flexDirection:"row"}}>
      <View style={styles.squareButton}>
              <Text style={[styles.newSqure,{backgroundColor: "#27c696"}]}>11</Text>
              <Text style={styles.newTimes}>D</Text>
              </View> 
              <View style={styles.squareButton}>
              <Text style={[styles.newSqure,{backgroundColor: "#e5db00",}]}>01</Text>
              <Text style={styles.newTimes}>H</Text>
              </View>
              <View style={styles.squareButton}>
              <Text style={[styles.newSqure,{backgroundColor: "#00e500",}]}>09</Text>
              <Text style={styles.newTimes}>M</Text>
              </View> 
              <View style={styles.squareButton}>
              <Text style={[styles.newSqure,{backgroundColor: "#fbae00",}]}>01</Text>
              <Text style={styles.newTimes}>S</Text>
              </View> 
      </View>
      </View>
      </View>
      <View style={styles.stylish}>
      <MaterialCommunityIcons name='clock-time-ten-outline' size={20} color='black' style={styles.icons}/>
      <Text style={styles.Dur}>Start Time</Text>
     <TextInput keyboardType='phone-pad'  placeholder='12/05/22' style={styles.width}></TextInput>
     <View style={styles.pad}>
     <Feather name='box' size={20} color='black'  />
     </View>
     <View style={{paddingTop:3,flexDirection:'row'}}>
     <Text style={{paddingHorizontal:5}} >No. Of Questions  </Text>
    <TextInput placeholder='13' keyboardType='numeric' style={styles.textinput}></TextInput>
    </View>
      </View>
      <View style={styles.stiles}>
      <MaterialCommunityIcons name='clock-time-ten-outline' size={20} color='black' style={styles.icons}/>
      <Text style={styles.Dur}>End Time  </Text>
     <TextInput keyboardType='phone-pad'  placeholder='12/05/22' style={styles.width}></TextInput>
     <View style={styles.pad}>
     <Ionicon name='person-outline' size={18} color='black'   />
     </View>
     <Text style={{paddingTop:3,paddingHorizontal:5}}>No. Of Participants</Text>
     <View style={{paddingTop:5}}>
    <TextInput placeholder='13' keyboardType='numeric' style={styles.textinput}></TextInput>
      </View>
      </View>
      <View style={styles.stiles}>
      <Entypo name='wallet' size={18} color='black' style={styles.icons}/>
      <Text style={styles.Dur}>Registration Fees</Text>
     <TextInput keyboardType='phone-pad'  placeholder='Rs.' style={styles.width}></TextInput>

      </View>
      <View style={{paddingTop:12,paddingLeft:16}}>
      <TouchableOpacity style={styles.opacity}>
      <Text style={{color:'white',textAlign:'center',textAlignVertical:'center'}}>Register</Text>
      </TouchableOpacity>
      </View>
      </View >
      <View style={{backgroundColor:'#F8F8F8'}}>
      <Text style={styles.head}>  English for Sceince, Techs & Engineering</Text>
      </View>
      <View style={{}}>
      <View style={styles.anotherView}>
<Image source={require("../assets/navbar.png")}
      style={styles.stile}></Image>
      <Text> </Text>
      <View style={styles.stile}>
   
      <Text style={styles.test}> <Text style={{color:'blue'}}> Reviews</Text> {'\n'}<StarRating
        rating={rating}
        onChange={setRating}
        starSize={10}
        emptyColor='black'
   
        
      />
      </Text>
      </View>
      <View style={styles.verticleLine}></View>
     
      <Text style={styles.test}><Text style={{color:'blue'}}>Category</Text> {'\n'} English</Text>
      
     
      <View style={styles.verticleLine}></View>
      <Text style={styles.test}><Text style={{color:'blue'}}>Creater</Text> {'\n'}Admin</Text>
      <Image source={require("../assets/Group.png")}></Image>
      
      </View>
      </View>
      <View style={styles.padBox}>
      <Text style={styles.newButton}>Leaderbord</Text>
      </View>
      <View style={{backgroundColor:'white',marginRight:1,}}>
      <View style={styles.padTop}>
      <View style={[styles.pickedDateContainer,{flexDirection:"row"}]}>
      <Image source={require("../assets/Vector.png")}
       style={styles.newImage}></Image>
           <Image source={require("../assets/Prizes.png")}
     style={styles.vector} ></Image>
      <Text style={styles.nameText}>Jane Cooper</Text>
      <Text style={styles.ratinng}>10.9</Text>
              </View>
              
      </View>
      <View style={styles.padTop}>
      <View style={[styles.pickedDateContainer,{flexDirection:"row"}]}>
      <Image source={require("../assets/Vector1.png")}
       style={styles.newImage}></Image>
           <Image source={require("../assets/Prize2.png")}
     style={styles.vector} ></Image>
      <Text style={styles.nameText}>Wade Warren</Text>
      <Text style={[styles.ratinng,{paddingLeft:92}]}>10.9</Text>
              </View>      
      </View>
      <View style={styles.padTop}>
      <View style={[styles.pickedDateContainer,{flexDirection:"row"}]}>
      <Image source={require("../assets/Vector2.png")}
       style={styles.newImage}></Image>
           <Image source={require("../assets/Prize3.png")}
     style={styles.vector} ></Image>
      <Text style={styles.nameText}>Esther Howard</Text>
      <Text style={[styles.ratinng,,{paddingLeft:87}]}>10.9</Text>
              </View>      
      </View>
      <View style={styles.padTop}>
      <View style={[styles.pickedDateContainer,{flexDirection:"row"}]}>
      <Image source={require("../assets/Vector3.png")}
       style={styles.newImage}></Image>
       <Text style={styles.fourthStyle}>4th </Text>
      <Text style={styles.nameText}>Cameron Williamson</Text>
      <Text style={[styles.ratinng,{paddingLeft:52}]}>10.9</Text>
              </View>      
      </View>
      <View style={styles.padTop}>
      <View style={[styles.pickedDateContainer,{flexDirection:"row"}]}>
      <Image source={require("../assets/Vector3.png")}
       style={styles.newImage}></Image>
       <Text style={styles.fourthStyle}>5th </Text>
      <Text style={styles.nameText}>Brooklyn Simmons</Text>
      <Text style={[styles.ratinng,{paddingLeft:66}]}>10.9</Text>
              </View>      
      </View>
      </View>
      <View style={{paddingTop:50,paddingHorizontal:39,backgroundColor:'#F8F8F8'}}>
       <View style={{backgroundColor:'#3600a7',height:148,borderRadius:10,}}>
          <View style={{flexDirection:'row'}}>
          <Text style={{color:'white',fontSize:18}}> This will be Quiz name {'\n'} in 2 lines</Text>
          <View style={styles.freeNew}>
      <Text >Free</Text>
      </View>
      </View>
   
      <Text style={{color:'white',paddingTop:23,fontSize:15,}}> Ends in</Text>
      <View style={{flexDirection:"row"}}>
      <View style={styles.squareButton}>
              <Text style={[styles.squre,{backgroundColor: "#27c696"}]}>11</Text>
              <Text style={{color:'white',marginLeft:7}}>Day</Text>
              </View> 
              <View >
              <Text style={[styles.squre,{backgroundColor: "#e5db00",}]}>01</Text>
              <Text style={{color:'white',marginLeft:5}}>Hour</Text>
              </View> 
              <View style={styles.squareButton}>
              <Text style={[styles.squre,{backgroundColor: "#00e500",}]}>09</Text>
              <Text style={{color:'white',marginLeft:9}}>Min</Text>
              </View> 
              <View style={styles.squareButton}>
              <Text style={[styles.squre,{backgroundColor: "#fbae00",}]}>01</Text>
              <Text style={{color:'white',marginLeft:7}}>Sec</Text>
              </View> 
              
              
      <View style={styles.circle}>
         <Ionicon name='ios-person-outline' color='white' size={20} style={{paddingTop:15,paddingHorizontal:12}}/>
      </View>
       </View>
       </View>
      </View>
      <View style={{flexDirection:'row',paddingLeft:23,}}>
      <View style={styles.newLastView}>
                  <Text style={styles.newCircles}>  ?</Text>
                  <Text style={{paddingLeft:2}}>10</Text>
                  
                  </View>
                  <View style={styles.newLastView}>
                  <Ionicon name='ios-person-outline' color='white' size={20} style={[styles.newCircles,{backgroundColor: '#3600a7',paddingLeft:4}]}/>
                  <Text style={{paddingLeft:2}}>10</Text>
                  </View>
                  <View style={styles.newLastView}>
                  <Text style={[styles.newCircles,{backgroundColor: '#fbae00',}]}>  $</Text>
                  <Text style={{paddingLeft:2}}>$56</Text>
               
                  </View>
                  </View>
  <View style={{paddingHorizontal:30,}}>
  <View style={{backgroundColor:'white', borderBottomLeftRadius:9,borderBottomRightRadius:9,margin:5,
         ...Elevations[4]}}>
      <View style={styles.prizeView}>
         <Text style={{fontSize:18}}>Prize Pool</Text>
         <Text style={{paddingLeft:50,fontSize:18}}>Quiz Schedule</Text>
      </View>
      <View style={styles.lastView}>
                  <Text style={styles.newCircle}>1st</Text>
                  <Text style={{paddingLeft:5}}>$88</Text>
                  <Text style={{paddingLeft:83}}>Start:22/feb/22</Text>
                  </View>
                  <View style={styles.lastView}>
                  <Text style={[styles.newCircle,{backgroundColor: '#3600a7',}]}>2nd</Text>
                  <Text style={{paddingLeft:5}}>$56</Text>
                  <Text style={{paddingLeft:85}}>End:22/feb/22</Text>
                  </View>
                  <View style={styles.lastView}>
                  <Text style={[styles.newCircle,{backgroundColor: '#fbae00',}]}>3rd</Text>
                  <Text style={{paddingLeft:5}}>$40</Text>
               
                  </View>
                  <View style={{paddingTop:15,paddingLeft:25,marginBottom:10}}>
      <TouchableOpacity style={styles.NewOpacity} onPress={() => navigation.push("QuizRule")}>
      <Text style={{color:'white',textAlign:'center'}}>Register</Text>
      </TouchableOpacity>
      </View>
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
      ...Elevations[4] 

     
       },
         anotherView:{
      
            flexDirection:'row-reverse',
            
            paddingHorizontal:5,
            alignItems:'center',
            justifyContent:'space-around',
            backgroundColor:'#ffffff',
            height: 60,
             width: '95%',
             margin:8,
         ...Elevations[4],

      
         backgroundColor: 'white',
         
      
         
   
      
           
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
        cont:{
          
           backgroundColor:'white',
           marginTop:23,
           marginLeft:7,
           marginRight:5,
           borderRadius:18,
           paddingBottom:10
           
      
           
        },
     greenHeader:{
        backgroundColor:'#3EC78D',
        borderTopLeftRadius:18,
        borderTopRightRadius:17,

        
        color:'white',
        height:36,
        
        fontSize:20,
        textAlign:'center',
        textAlignVertical:'center'
     },
     newView:{
        
        backgroundColor:'white',
        top:16,
        left:5,
      
        width:'98%',
        
       
     },
     stiless:{
      flexDirection:'row',
      
      
  },
     free:{
        paddingHorizontal:7,
        backgroundColor:'#46CC5B',
        borderRadius:15,
        marginLeft:12,
        width: 45,
        height: 19.61,
        
     },
     textalign:{
      color:'white',
      fontSize:12,
      textAlign:'center'
     },
     
     freeNew:{
        paddingHorizontal:8,
        backgroundColor:'#25e65b',
        borderRadius:20,
        marginTop:8,
       marginLeft:39,
        width: 45,
        height: 22,
        
        
     },
     paddingHor:{
         marginHorizontal:5,
         
     },
     icon:{
        marginLeft:20,
      
     },
     Dur:{
        paddingHorizontal:5,
        paddingTop:4

     },
     Durs:{
      paddingHorizontal:5,
      

   },
     icons:{
        
        paddingTop:5,
        paddingLeft:5
     },
    width:{
        width:60,
      
    },
    iconWidth:{
  paddingHorizontal:5
    },
    stiles:{
        flexDirection:'row',
        paddingTop:22,
    },
    stylish:{
      flexDirection:'row',
      paddingTop:20
      
  },
   
    pad:{
        
        marginLeft:12,
        paddingTop:3
    },
     textinput:{
        height:20,
        paddingHorizontal:5,
        width:25,
        fontWeight:'bold',
        
     },
     opacity:{
      backgroundColor:'#fabc00',
      height:36,
      borderRadius:5,
      paddingTop:5,
      width:310,
      
     },
     verticleLine:{
      height: '90%',
      width: 1,
      backgroundColor: '#909090',
    },
    head:{
      paddingTop:30,
      fontSize:18,
      fontWeight:'bold',

      paddingBottom:5
    },
    newButton:{
      backgroundColor:'#fabc00',
      textAlign:'center',
      height:40,
      width:220,
      color:'white',
      fontSize:18,
      fontWeight:'bold',
      borderRadius:5,
      paddingTop:8
    },
    textStyles:{
      borderWidth:1,
      height:90,
      backgroundColor:'#fbfbfb',
      fontWeight:'bold',
      textAlignVertical : "top",
      width:340,
      borderRadius:6,
    } ,
    padTop:{
      width:'83%',
   
      paddingBottom:6,
      
      
    },
    padBox:{
      paddingTop:15,
      paddingLeft:60,
      width:'94.4%',
      backgroundColor:'white',
      marginLeft:10,
      height:80
    },
    circle:{
      width: 56,
      height: 56,
      borderRadius: 56 / 2,
      backgroundColor: '#3600a7',
      borderColor:'white',
      paddingHorizontal:5,
      marginLeft:60,
      marginTop:28,
      borderWidth:1,    
 },
 
   newCircle:{
      width: 18,
      height: 18,
      borderRadius: 18 / 2,
      backgroundColor: '#25e65b',
      color:'white',
      paddingHorizontal:1,
      fontSize:10,       
 },
 newCircles:{
   width: 18,
   height: 18,
   borderRadius: 18 / 2,
   backgroundColor: '#c3005a',
   color:'white',
   paddingHorizontal:1,
   fontSize:10,  
   paddingTop:2
        
},
 squre:{
   width: 33,
   height: 30,
   color:'white',
   borderRadius:3,
   alignItems:'center',
   paddingLeft:6,
   fontSize:20,
   marginLeft:5,
   
},
pickedDateContainer: {
   
    borderRadius: 5,
    borderWidth:1,  

    width:"110%",
    marginLeft:15,
    marginRight:2,
    backgroundColor: '#FBFBFB',
    borderColor:'#CCCCCC',
    color:'#CCCCCC',
    height:49

  },

  stlishText:{
   color: '#00459E',
   paddingLeft:5,
   marginBottom:10,
   fontSize:18,
   fontWeight:'400',
   
  },
  NewOpacity:{
   backgroundColor:'#3dc78c',
   height:40,
   borderRadius:10,
   paddingTop:5,
   width:'90%',
   paddingTop:10
  },
  lastView:{
   paddingTop:4,
   flexDirection:'row',
   paddingLeft:10,
  },
  newLastView:{
   paddingTop:4,
   flexDirection:'row',
   paddingLeft:18,
   

  },
  prizeView:{
   marginTop:10,
   flexDirection:'row',
   paddingLeft:10
  },
  newSqure:{
   width: 20,
   height: 20,
   color:'white',
   borderRadius:3,
   alignItems:'center',
   paddingLeft:2,
   fontSize:12,
   marginLeft:2,
   paddingTop:2,
   
   
},
newTimes:{
   color:'black',
   marginLeft:7
},
vector:{
   marginLeft:4,
   marginTop:6
},
ratinng:{
   paddingTop:12,
   fontSize:16,
   color:'#4B3187',
   fontWeight:'bold',
   paddingLeft:100,

},
nameText:{
   paddingLeft:20,
   paddingTop:11,
   fontSize:16
},
newImage:{
   marginLeft:4,
   marginTop:3,

},
fourthStyle:{
   color:'#4B3187',
   fontWeight:'bold',
   paddingTop:14,
   paddingLeft:12,
   fontSize:16,

   
}
     
});
export default LeaderBoard;
