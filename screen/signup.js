import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView ,Button,Alert,ImageBackground,Image} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { number } from 'yup';
function Signup({ navigation }) {
  const [name,setName]= useState("")
  const [phone,setPhone]=useState("")
  const [email, setEmail] = useState("")
  const [nameError,setNameError]= useState("")
  const [phoneError,setPhoneError]=useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

const onClicK = () => {
  var nameValid=false;
  if(name==0){
    setNameError("Name cannot be Null")
  }
  else if(name.length < 6){
    setNameError("Name should be minimum 6 characters");
}  
else{
  setNameError("")
        nameValid = true
}
var phoneValid=false;
if (phone==0){
  setPhoneError("Phone number cannot be empty")
}
else if(phone.length<1){
  setPhoneError("Number contains 11 Letter")
}
else{
  setPhoneError("")
  phoneValid=true
}
    var emailValid = false;
    if(email.length == 0){
        setEmailError("Email is required");
    }        
    else if(email.length < 6){
        setEmailError("Email should be minimum 6 characters");
    }      
    else if(email.indexOf(' ') >= 0){        
        setEmailError('Email cannot contain spaces');                          
    }
    else if(email.trim().includes("@")==false )  {
      setEmailError('Email contains @ in it')
    }  
    else if(email.trim().includes(".")==false )  {
      setEmailError('Email contains .(dot) in it')
    } 
    else{
        setEmailError("")
        emailValid = true
    }

    var passwordValid = false;
    if(password.length == 0){
        setPasswordError("Password is required");
    }        
    else if(password.length < 6){
        setPasswordError("Password should be minimum 6 characters");
    }      
    else if(password.indexOf(' ') >= 0){        
        setPasswordError('Password cannot contain spaces');                          
    }    
    else{
        setPasswordError("")
        passwordValid = true
    }        

    if(emailValid && passwordValid){            
        alert('Email: ' + email + '\nPassword: ' + password); 
        setEmail("");
        setPassword("");
    }        

}
    return (
      <ScrollView style={styles.container} > 
      <Image source={require("../assets/Quizzing.png")}
      style={{height:"15%",width:"100%",}}>
  </Image>
        
        <View style={styles.newContainer}>
        <Text style={styles.text}>Sign up</Text>
        <Text style={styles.test}>First Name</Text>
        <View style={styles.horiz}>
          <View style={[styles.inputBox,{borderColor:nameError ? 'red':'black'},]}>
        <Ionicon name='person-outline' size={20} color='black'/>
        <TextInput value={name} onChangeText={(e)=>setName(e)} 
        style={styles.texts} placeholder='First name' placeholderTextColor='black' color='black' ></TextInput>
        </View>
        </View>
        <View style={{paddingHorizontal:50,color:'red'}}>
            {nameError.length > 0 &&
                  <Text style={{color:'red'}}>{nameError}</Text>
                }
                </View>
                <Text style={styles.test}>Phone</Text>
        <View style={styles.horiz}>
          <View style={[styles.inputBox,{borderColor:phoneError ? 'red':'black'},]}>
        <FontAwesome name='mobile-phone' size={20} color='black'/>
        <TextInput value={phone} onChangeText={(e)=>setPhone(e)}
        style={styles.texts} placeholder='Phone' placeholderTextColor='black'></TextInput>
        </View>
        </View>
        <View style={{paddingHorizontal:50,color:'red'}}>
            {phoneError.length > 0 &&
                  <Text style={{color:'red'}}>{phoneError}</Text>
                }
                </View>
                <Text style={styles.test}>Email</Text>
        <View style={styles.horiz}>
          <View style={[styles.inputBox,,{borderColor:emailError ? 'red':'black'},]}>
          <Feather name='mail' size={20} color='black'/>
        <TextInput value={email} onChangeText={(e)=>setEmail(e)} 
        style={styles.texts} placeholder='Email' placeholderTextColor='black'></TextInput>
        </View>
        </View>
        <View style={{paddingHorizontal:50,color:'red'}}>
            {emailError.length > 0 &&
                  <Text style={{color:'red'}}>{emailError}</Text>
                }
                </View>
                <Text style={styles.test}>Password</Text>
        <View style={styles.horiz}>
          <View style={[styles.inputBox,{borderColor:passwordError ? 'red':'black'},]}>
        <FontAwesome name='lock' size={20} color='black'/>
        <TextInput value={password} onChangeText={(e)=>setPassword(e)} 
        style={styles.texts} placeholder='Password' placeholderTextColor='black' secureTextEntry={true}></TextInput>
        </View>
        </View>
        <View style={{paddingHorizontal:50,color:'red'}}>
            {passwordError.length > 0 &&
                  <Text style={{color:'red'}}>{passwordError}</Text>
                }
                </View>
                <Text style={styles.test}>Confirm Password</Text>
        <View style={styles.horiz}>
          <View style={[styles.inputBox,{borderColor:passwordError ? 'red':'black'},]}>
        <FontAwesome name='lock' size={20} color='black'/>
        <TextInput value={password} onChangeText={(e)=>setPassword(e)} 
        style={styles.texts} placeholder='Confirm Password' placeholderTextColor='black' secureTextEntry={true}></TextInput>
        </View>
        </View>
        <View style={{paddingHorizontal:50,color:'red'}}>
            {passwordError.length > 0 &&
                  <Text style={{color:'red'}}>{passwordError}</Text>
                }
                </View>
        <View style={styles.stile}>
        <View style={styles.padding}></View>
        <TouchableOpacity title='Login' style={styles.button}
          onPress={()=>onClicK()}>
        <Text style={{ color: "white",fontSize:18 ,paddingTop:10,fontWeight:"bold"}}>Sign up</Text>
        </TouchableOpacity>
        
        
        </View>
        <View style={styles.ex}>
        <Text style={{color:'black',fontSize:18}} >Already have a account? </Text>
      <TouchableOpacity style={{color:'cyan'}}
      onPress={()=>navigation.popToTop("Login")}>
        <Text style={{color:"blue",fontSize:18,marginBottom:30}}>Login</Text>
      </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
      
   
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:"#043c8c"
      
      
    
    },
    
  newContainer:{
    paddingTop:"8%",
  
    backgroundColor:'white',
    borderRadius:30,
    marginHorizontal:18,
    height:'auto',
    marginTop:9,
    marginBottom:200,
    
  },
    test:{
      paddingHorizontal:"10%",
      paddingTop:7,
      color:'black',
      fontWeight:"bold",
    },
    text:{
      fontWeight:"bold",
      fontSize:30,
      
      paddingHorizontal:"35%",
      color:"black"
    },
    texts:{
  
      width:"100%",
      paddingHorizontal:5
  
    },
    padding:{
      paddingTop:25,
      paddingHorizontal:"0%",
      width:"100%",
      
    },
    button:{
      padding:23,
    paddingTop:12,
    backgroundColor:'#2667d1',
    paddingHorizontal:50,
    paddingLeft:"37%",
       borderRadius:5
      
    },
    stile:{
      paddingHorizontal:'20%',
      paddingHorizontal:'10%',
  
    },
    buttonText:{
      fontSize:16,
      justifyContent:"center",
      alignItems:"center",
      paddingTop:10
    },
    sample:{
      paddingHorizontal:"33%",
      color:'cyan',
      paddingTop:5
    },
    new:{
      paddingTop:"28%",
      paddingHorizontal:"22%",
      color:'white'
    },
    inputBox:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        borderWidth:1,
        width:"90%",
        paddingHorizontal:10,
        borderRadius:4,
        padding:15,
        paddingTop:15
  
        
    },
    horiz:{
        paddingHorizontal:25,
        paddingTop:5,
        width:"110%",
    },
    ex:{
        flexDirection:'row',
        paddingTop:15,
        paddingHorizontal:43
    },
    
  
  });
  export default Signup;