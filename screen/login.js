import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image,ImageBackground } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Snackbar from 'react-native-snackbar-component';



function Login({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [snackIsVisible, setSnackIsVisible] = useState(false);
  const [distance, setDistance] = useState(0);
 
const onClicK = () => {
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
      navigation.navigate("Question")
    }        

}

    return (
      
      
           
      
      <ImageBackground source={require("../assets/Shiny.png")}
       style={{flex:1,height:"100%",width:"100%"}}>
   

          <ScrollView style={styles.container}>
            <View style={styles.newContainer}>
            <Text style={styles.text}>Log in</Text>
            <Text style={styles.test}>Username or email</Text>
            <View style={styles.horiz}>
                <View style={[styles.inputBox,{borderColor:emailError ? 'red':'black',borderRadius:4},]}>
                    <Feather name='mail' size={20} color='white' />
                    <TextInput value={email} onChangeText={(text)=>setEmail(text)} style={styles.texts} placeholder='Username or email'
                        placeholderTextColor='black'
                        ></TextInput>
                </View>
            </View>
            <View style={{paddingHorizontal:50,color:'red'}}>
            {emailError.length > 0 &&
                  <Text style={{color:'red'}}>{emailError}</Text>
                }
                </View>
                <Text style={styles.display}> Password</Text>
            <View style={styles.horiz}>
                <View style={[styles.inputBox,{borderColor:passwordError ? 'red':'black',borderRadius:4},]}>
                    <FontAwesome name='lock' size={20} color='white' />
                    <TextInput value={password} onChangeText={(e)=>setPassword(e)} style={styles.texts} 
                    placeholder='Password'
                        placeholderTextColor='black' secureTextEntry={true}></TextInput>
               
                   
                </View>
                  
                {passwordError.length > 0 &&
            
            <Text style={{color:'red',paddingHorizontal:10}}>{passwordError}</Text>
                   }
            </View>
            <View style={styles.ex}>
                <Text style={{ color: 'black',fontSize:16 }} >Forget password? </Text>
                <TouchableOpacity title="click me" onPress={() => navigation.navigate("Forget")}>
                    <Text style={{ color: "blue",fontWeight:'bold',fontSize:16 }}>Reset your password</Text>
                </TouchableOpacity>
                
             
            </View>

            <View style={styles.stile}>
                <View style={styles.padding}></View>
                <TouchableOpacity style={styles.button}
                    onPress={() => onClicK()}
                >
                    <Text style={styles.log}>Log in</Text>
                </TouchableOpacity>

            </View>
            
            <View style={[styles.ex,{paddingHorizontal:45}]}>
                <Text style={{ color: 'black',fontSize:18 }} >Don't have an account? </Text>
                <TouchableOpacity title="click me" onPress={() => navigation.navigate("Signup")}>
                    <Text style={{ color: "blue",fontSize:18,marginBottom:30 }}>Signup</Text>
                </TouchableOpacity>
                
             
            </View>
            </View>
        
        


        </ScrollView>
        </ImageBackground>
     
    );
}





const styles = StyleSheet.create({
  container: {
    
    paddingTop:"40%",
    
    
  
  },
  
  newContainer:{
    
    
    backgroundColor:'white',
    borderRadius:30,
    

   height:'auto',
   marginHorizontal:18,

   
    

    
  },
  test:{
    paddingHorizontal:"6%",
    paddingTop:25,
    color:'black',
    fontWeight:'bold',
  },
  text:{
    fontWeight:"bold",
    fontSize:30,
    paddingTop:"8%",
    paddingHorizontal:"38%",
    color:"black",
  
  },
  texts:{

    width:"100%",
    
    

  },
  padding:{
    paddingTop:12,
    paddingHorizontal:"0%",
    width:"100%"
  },
  button:{
    padding:23,
    paddingTop:8,
    backgroundColor:'#2667d1',
    paddingHorizontal:50,
    paddingLeft:"37%",
    borderRadius:5
    
  },
  stile:{
    paddingHorizontal:'5%',
   paddingTop:20,
  },
  buttonText:{
  fontSize:16,
  justifyContent:"center",
  alignItems:"center",
  paddingTop:10,
  
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
      paddingHorizontal:1,
    
      padding:15,
      paddingTop:15

      
  },
  horiz:{
      paddingHorizontal:18,
      paddingTop:2,
      width:"110%",
  },
  display:{
 paddingTop:30,
 paddingHorizontal:18,
 fontWeight:'bold',
  },
  ex:{
      flexDirection:'row',
      paddingTop:15,
      paddingHorizontal:23
  },
  pad:{
    paddingTop:10
  },
  log:{
    color:'white',
    fontSize:22,
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:8,
    paddingHorizontal:"8%",
  



  }
});
export default Login;