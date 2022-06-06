import react from "react";
import {View,Text,Image,Button,TouchableOpacity,StyleSheet,} from 'react-native';
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'

 const CustomDrawer = (props) => {
     return(
         <View style={{flex:1,backgroundColor:'#00459E'}}>
             
        <DrawerContentScrollView {...props}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
        <Image source={require("../assets/iQzeto.png")}></Image>
        </View>
        <View style={{paddingTop:40,color:'white'}}></View>
        
            <DrawerItemList {...props} />
            
            <View >
                <TouchableOpacity  onPress={() => props.navigation.closeDrawer()} 
                style={styles.Touchable} >
                 <Text style={{textAlign:'center'}}>Close</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
        </View>
     )
 }
const styles=StyleSheet.create({
Touchable:{
    backgroundColor:'white',
    borderRadius:10,
    height:30,
    alignSelf:'center',
    width:80,
    marginBottom:10,
    justifyContent: 'center', 
    alignItems: 'center', 
       
    
}
})
 export default CustomDrawer;