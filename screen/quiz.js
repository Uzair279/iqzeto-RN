import React,{useState,useEffect} from 'react';
import {StyleSheet, View, Text,Image,TextInput,Button,alert,ScrollView,TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from '@react-native-community/datetimepicker';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import NumericInput from 'react-native-numeric-input';
import Elevations from 'react-native-elevation';

import { LogBox } from 'react-native';


function Quiz({ navigation }) {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, []);
      const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  const [time, setTime] = useState(new Date(Date.now()));
      const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const [item, setItem] = useState([
    {label: 'mcqs', value: 'Select option'},
    {label: 'simple', value: 'simple'}
  ]);
  const [opens, setOpens] = useState(false);
  const [values, setValues] = useState();
  const [items, setItems] = useState([
    {label: 'mcqs', value: 'Select option'},
    {label: 'simple', value: 'simple'}
  ]);
  const [openss, setOpenss] = useState(false);
  const [valuess, setValuess] = useState();
  const [itemss, setItemss] = useState([
    {label: 'mcqs', value: 'Select option'},
    {label: 'simple', value: 'simple'}
  ]);
  const [opensss, setOpensss] = useState(false);
  const [valuesss, setValuesss] = useState();
  const [itemsss, setItemsss] = useState([
    {label: 'mcqs', value: 'Select option'},
    {label: 'simple', value: 'simple'}
  ]);
  const [val,isVal]=useState();
  const [simple,isSimple]=useState();
  
  const showPicker = () => {
      setIsPickerShow(true);
    };
  
    const onChange = (event, value) => {
      setDate(value);
      if (Platform.OS === 'android') {
        setIsPickerShow(false);
      }
    };
return (

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
     
      <Text style={styles.test}>12$ {'\n'} Real qzeto</Text>
      </View>
      <View style={styles.stile}>
      <Image source={require("../assets/dollar.png")} ></Image>
      <Text style={styles.test}>3$ {'\n'} Free Quiz</Text>
      </View>
      <View style={styles.stile}>
      <Image source={require("../assets/hand-gesture.png")}></Image>
      <Text style={styles.test}>0$ {'\n'}Bonus qzeto</Text>
      </View>
      <Image source={require("../assets/Group.png")}></Image>
      </View>
      
      <View style={styles.elev}>
            <Text style={styles.main}> Schedule New Quiz</Text>
            <View style={styles.first}>
              <View style={{paddingTop:2}}>
                  <Text style={styles.circle}>1</Text>
                  </View>
            <Text style={[styles.point,{paddingHorizontal:5}]}>Basic Details</Text>
            </View>
            
            <Text style={styles.text}>Title</Text>
            <TextInput placeholder='Title' style={styles.input}></TextInput>
            <View style={{flexDirection:'row',paddingTop:9}}>
             <Text style={{paddingHorizontal:10}} >Type</Text>
             <Text style={{paddingHorizontal:125}}>Category</Text>
            </View>
            <View style={{flexDirection:'row',width:"35%",paddingTop:4,}}>
              <View style={{paddingHorizontal:10,}}>  
            <DropDownPicker
            placeholder="Select option"
            
      open={open}
      value={value}
      items={item}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItem}
    />
    </View>  
            <View style={{paddingHorizontal:7.5}}>
            <DropDownPicker
            placeholder='select option'
      open={opens}
      value={values}
      items={items}
      setOpen={setOpens}
      setValue={setValues}
      setItems={setItems}
    />
    </View>
    </View >
    <View style={{paddingTop:7}} >
    <Text style={styles.text}>Registration Fees</Text>
    <TextInput placeholder='Enter registration fees' 
    keyboardType = 'numeric' style={styles.input}></TextInput>
    </View>
    <View style={styles.first}>
      <View style={{paddingTop:2}}>
                  <Text style={styles.circle}>2</Text>
                  </View>
                  <View style={{paddingHorizontal:4}}>
                  
            <Text style={styles.point}>Basic Details</Text>
            </View>
            </View>
             <View style={{paddingHorizontal:10,paddingTop:7}}>
            <Text style={{paddingLeft:2,paddingBottom:4}}>Date</Text>
            
            
            <View style={styles.pickedDateContainer}>
              
        <Text style={styles.pickedDate}>{date.toUTCString()}</Text>
        {!isPickerShow && (
        <View style={{marginRight:5}}>
        <Fontisto name='date' size={20} color='black' onPress={showPicker}
         />
        </View>
       
)}

        </View>
        
        </View>
        <View style={{paddingTop:9,}}>
        <View style={{flexDirection:'row',width:'100%'}}>
        <View style={{width:"48%",paddingLeft:10}}>
            <Text>Start Time</Text>
           <View style={{paddingTop:4}}>
            <View style={styles.pickedDateContainer}>
        <Text style={styles.pickedDates}>{date.toUTCString()}</Text>
        {!isPickerShow && (
           <View style={{paddingRight:2}}>
        <MaterialCommunityIcons name='clock-time-ten-outline' size={20} color='black' onPress={showPicker} />
        </View>
    )}
        </View>
        </View>
        </View>
        <View style={{width:"48%",paddingLeft:10,}}>
            <Text>End Time</Text>
            <View style={{paddingTop:4,}}>
            <View style={styles.pickedDateContainer}>
             
        <Text style={styles.pickedDatesAgain}>{date.toUTCString()}</Text>
       
        {!isPickerShow && (
        
        <View style={{paddingRight:2}}>
        <MaterialCommunityIcons name='clock-time-ten-outline' size={20} color='black' onPress={showPicker} />
        </View>
   )}
 
        </View>
        </View>
        </View>
        
        </View>
        </View>
      {/* The date picker */}
      {isPickerShow && (
        <DatePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}
<Text style={styles.texts}>Min percentage</Text>
<View style={styles.horiz}>
<View style={styles.inputBox}>
  
<TextInput placeholder='Enter value' style={styles.ques}  ></TextInput>
<View style={{paddingTop:9}}>
<Feather name='percent' size={20} color='black' />
</View>
 </View>
 </View>
 <Text style={styles.text}>Duration</Text>
<View style={styles.horiz}>
<View style={styles.inputBox}>
<TextInput placeholder='Enter value' style={styles.ques}  ></TextInput>
<View style={{paddingTop:9}}>
<MaterialCommunityIcons name='clock-time-ten-outline' size={20} color='black'/>
</View>
 </View>
 </View>
 <View style={styles.first}>
              <View style={{paddingTop:2}}>
                  <Text style={styles.circle}>3</Text>
                  </View>
            <Text style={[styles.point,{paddingHorizontal:4}]}>Question rule</Text>
            </View>
            <Text style={{paddingHorizontal:10,paddingTop:9}}>Question Type</Text>
           <View style={{paddingHorizontal:10,paddingTop:4}}>
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
      containerStyle={{position: 'relative', width: '100%',}}
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
     <Text style={{paddingHorizontal:10,paddingTop:7}}>Question Subject</Text>
     <View style={{paddingHorizontal:10,paddingTop:4}}>
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
    
    <Text style={styles.text}>Title</Text>
            <TextInput placeholder='Title' keyboardType='numeric' style={styles.input}></TextInput>
            <Text style={[styles.text,{color:'blue',},]}>Add more +</Text>
            <View style={styles.buttonView}>

            <TouchableOpacity style={styles.Touchable}>
              <Text style={styles.finalText}>Leave Quiz</Text>
            </TouchableOpacity>

            <Text style={styles.pageNumberText}>4/10</Text>
            <TouchableOpacity style={[styles.Touchable, { width: 65, marginLeft: 65, backgroundColor: '#1DB95B' }]} onPress={() => {navigation.navigate("Prize")}}>
              <Text style={styles.finalText}>Next</Text>
            </TouchableOpacity>
          </View>
         </View>   
</ScrollView>


  );
}

const styles=StyleSheet.create({
 container:{
flex:1,
backgroundColor:'#F8F8F8',

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
  fontSize:23,

  marginLeft:2
 },
 elev:{
  paddingTop:10,
  flex:1,
  marginTop:8,
  backgroundColor:'white',
  marginHorizontal:10,
  ...Elevations[4] 
 },
 circle:{
      width: 18,
      height: 18,
      borderRadius: 18 / 2,
      backgroundColor: 'blue',
      color:'white',
      textAlign:'center',
      fontSize:12,
      
      
  
      
      
      
 },
 point:{
   
      fontSize:16,
      fontWeight:'bold',
      paddingHorizontal:2,
      
 },
 first:{
  flexDirection:'row',
  justifyContent:'flex-start',
  alignItems:'center',

  paddingLeft:10,
  paddingTop:10
  
},
 input:{
      paddingHorizontal:5,
      borderWidth:1,
      marginHorizontal:10,
      borderRadius:5,
      height:50,
    
 },
 text:{
      paddingHorizontal:13,
      paddingTop:9,
      paddingBottom:4
 },
 texts:{
  paddingHorizontal:10,
  paddingTop:9,
  
},

 pickedDateContainer: {
     height:50,
      backgroundColor: '#0000',
      borderRadius: 5,
      borderWidth:1,
    
      flexDirection:'row',
      
      justifyContent:'space-between',
      alignItems:'center',
      
      width:"100%",
    
     

    },
    pickedDate: {
      fontSize: 9,
      color: 'black',
      
      
      
      
      justifyContent:'flex-start',
      alignItems:'center',
  

    },
    pickedDates: {
      fontSize: 9,
      color: 'black',
      justifyContent:'flex-start',
      alignItems:'center',
      
    },
    pickedDatesAgain: {
      fontSize: 9,
      color: 'black',
      justifyContent:'flex-end',
      alignItems:'center',
    
      
    
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
    paddingTop:5,
    borderRadius:5,
    height:50,


    
}, 
leng:{
  paddingHorizontal:10
  ,paddingTop:8
},
widt:{
  borderWidth:1,
  borderRadius:5,
  paddingHorizontal:10,
},
ques:{
  width:'92%',
  
 
  height:32,
  paddingHorizontal:5,
  
},
Touchable: {
  backgroundColor: '#B92F1D',
  borderRadius: 10,
  height: 37,
  marginHorizontal: 12,
  width: 110,
},
finalText: {
  color: 'white',
  textAlign: 'center',
  fontSize: 16,
  textAlign: 'center',
  paddingTop: 5
},
pageNumberText: {
  paddingTop: 9,
  color: '#777777',
  paddingLeft: 35
},
buttonView: {
  flexDirection: 'row',
  paddingTop: 100,
  paddingBottom: 10,

},


});

export default Quiz;