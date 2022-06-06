import React,{useState,useEffect} from 'react';
import {StyleSheet, View, Text,Image,TextInput,Button,alert,ScrollView,TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { LogBox } from 'react-native';
import Elevations from 'react-native-elevation';
import { DrawerActions } from '@react-navigation/native';
import style from 'react-native-datepicker/style';



function Question({ navigation }) {
   
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, []);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState();
    const [item, setItem] = useState([
      {label: 'MCQS', value: 'Select option'},
      {label: 'Simple', value: 'Simple'},
      {label: 'Red', value: 'Red'},
      {label: 'Blue', value:'Blue'},
      {label: 'Green', value: 'Green'},
      {label: 'Pink', value: 'Pink'},
      {label: 'Grey', value: 'Grey'},
      {label:'Dark', value: 'Dark'},
      {label: 'Redish', value: 'Redish'},
      {label: 'White', value: 'White'},
      {label: 'Orange', value: 'Orange'},
    ]);
    const [opens, setOpens] = useState(false);
  const [values, setValues] = useState();
  const [items, setItems] = useState([
    {label: 'Mcqs', value: 'Select option'},
    {label: 'Simple', value: 'Simple'},
    {label: 'Red', value: 'Red'},
      {label: 'Blue', value:'Blue'},
      {label: 'Green', value: 'Green'},
      {label: 'Pink', value: 'Pink'},
      {label: 'Grey', value: 'Grey'},
      {label:'Dark', value: 'Dark'},
      {label: 'Redish', value: 'Redish'},
      {label: 'White', value: 'White'},
      {label: 'Orange', value: 'Orange'},
   
  ]);

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
      style={styles.stile}
      ></Image>
      </TouchableOpacity>
      <Text> </Text>
      <View style={styles.stile}>
     <Image source={require("../assets/wallet.png")}
      ></Image>
     
      <Text style={styles.test}>12$ {'\n'} Real Qzeto</Text>
      </View>
      <View style={styles.stile}>
      <Image source={require("../assets/dollar.png")} ></Image>
      <Text style={styles.test}>3$ {'\n'} Free Quiz</Text>
      </View>
      <View style={styles.stile}>
      <Image source={require("../assets/hand-gesture.png")}></Image>
      <Text style={styles.test}>0$ {'\n'}Bonus Qzeto</Text>
      </View>
      <Image source={require("../assets/Group.png")}></Image>
      </View>
      <View style={styles.cont}>
      <Text style={styles.mainHeading}>Add Question</Text>
      
      <View style={styles.subjectView}>
          <Text style={styles.subHead}>Subject</Text>
          <View style={styles.drop}>
          <DropDownPicker
            placeholder='Select'
            closeAfterSelecting={true}
            listMode="SCROLLVIEW"
      open={open}
      value={value}
      items={item}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItem}
      zIndex={30}
      zIndexInverse={1000}
      containerStyle={{position: 'relative', width: '100%', left: '2%', paddingTop: 6}}
      style={{
        backgroundColor: '#fafafa',
        zIndex: 5000,
        position: 'relative',
      }}
      itemStyle={{justifyContent: 'flex-start'}}
      dropDownStyle={{backgroundColor: '#fafafa', height: 100}}
      dropDownContainerStyle={{
        backgroundColor: 'white',
        zIndex: 1000,
        elevation:5000,
      }}
    />

    </View>
    
      </View>
      
      <View style={styles.subjectView}>
          <Text style={styles.subHead}>Type    </Text>
          <View style={styles.drop}>
          <DropDownPicker
            placeholder='Select'
            closeAfterSelecting={true}
            listMode="SCROLLVIEW"
      open={opens}
      value={values}
      items={items}
      setOpen={setOpens}
      setValue={setValues}
      setItems={setItems}
      zIndex={10000}
    />
    </View>
      </View>
      <View style={styles.pads}>
      <Text style={styles.subHeading}>Question</Text>
      <View style={styles.padTop}>
      <View style={styles.pickedDateContainer}>
              
              <Text style={styles.pickedDate}>Which of the followingprocedure 
              can be used to compare the maen of included?</Text>

              </View>
              
      </View>
      </View>
      <View style={styles.pads}>
      <Text style={styles.subHeading}>Correct Answer</Text>
      <View style={styles.padTop}>
      <View style={styles.pickedDateContainer}>
              
              <Text style={styles.pickedDate}>Linear</Text>

              </View>
              
      </View>
      </View>
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
            onPress={() => navigation.push("Quiz")}>
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
   marginTop:5

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
     cont:{
      paddingTop:10,
      flex:1,
      
      marginTop:20,
      backgroundColor:'white',
      marginHorizontal:10,
      margin:8,
      ...Elevations[4] 
   
        
     },
     mainHeading:{
         color:'#00459E',
         fontSize:23,
         marginLeft:14

     },
     subHead:{
        paddingTop:20,
        fontSize:18,

        marginLeft:12
     },
     pads:{
       paddingTop:10,
       marginLeft:2
       
     },
     drop:{
        flexDirection:'row',
        width:"78%",
        paddingTop:9,
        paddingHorizontal:10
     },
     pad:{
        paddingTop:40
     },
     subHeading:{
         fontSize:20,
         color:'#00459E',
      
         paddingBottom:5,
         marginLeft:12
        
     },
     border:{
        height:80,
        backgroundColor: '#0000',
        borderRadius: 5,
        borderWidth:1,
       
    
    
     },
     quesText:{
        fontSize:18,
        paddingHorizontal:5,
        paddingTop:5
     },
     pading:{
         paddingTop:20,
     },
     
     padTop:{
      width:'83%'
      
      
    },
    pickedDateContainer: {
   
      borderRadius: 5,
      borderWidth:1,  
  
      width:"112%",
      marginLeft:10,
      marginRight:0,
      backgroundColor: '#FBFBFB',
      borderColor:'#CCCCCC',
      color:'#CCCCCC'
  
    },
    pickedDate: {
      fontSize: 18,
      color: 'black',
      paddingHorizontal:5,
      paddingTop:3,
      height:'auto',
      marginBottom:10,
      
  
    },
    stlishText:{
     color: '#00459E',
     paddingLeft:5,
     marginBottom:10,
     fontSize:18,
     fontWeight:'400',
     
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
      backgroundColor:'#FBFBFB'
     },
     squareDirection:{
      flexDirection:'row-reverse',
      paddingHorizontal:12
     },
     buttonView:{
      flexDirection:'row',
      paddingTop:100,
      paddingBottom:10,
  
   },
   subjectView:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
   }
  
});
export default Question;