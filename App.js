import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaView,Dimensions} from 'react-native';
import { NavigationContainer,DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import Signup from './screen/signup';
import Login from './screen/login';
import Forget from './screen/forget';
import Quiz from './screen/quiz';
import Question from './screen/question';
import Prize from './screen/prize';
import LeaderBoard from './screen/leaderBoard';
import QuizRule from './screen/quizRule';
import PrizePool from './screen/prizePool';
import PlatForm from './screen/platform';
import QuizName from './screen/quizName';
import SpinWheel from './screen/spin';
import QuizOption from './screen/quizOption';
import QuizBolean from './screen/quizBolean';
import QuizColumn from './screen/quizColumn';
import Performance from './screen/performance';
import CustomDrawer from './components/customDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const App = ()=> {
 
  return (
    <NavigationContainer>
     <Drawer.Navigator drawerContent={props=><CustomDrawer {...props}/>} 
     screenOptions={{
       headerShown:false,
       drawerActiveBackgroundColor:'white',
       drawerActiveTintColor:'#00459E',
       drawerInactiveTintColor:'white',
      drawerStyle:{width:210},
       drawerLabelStyle:{marginLeft:-25}
     }}>
      <Drawer.Screen name="Question Bank" component={Question} options={{
        drawerIcon: ({color}) =>(
          <Ionicons name='home-outline' size={20} color={color}/>
        )
      }} />
      <Drawer.Screen name=" Schedule Quiz" component={Quiz} options={{
        drawerIcon: ({color}) =>(
          <Ionicons name='time-outline' size={20} color={color}/>
        )
      }} />
      <Drawer.Screen name="Prize" component={Prize} options={{
        drawerIcon: ({color}) =>(
        <Ionicons name='home-outline' size={20} color={color}/>
        )
     , }}/>
      <Drawer.Screen name="PrizePool" component={PrizePool} options={{
        drawerIcon: ({color}) =>(
          <Ionicons name='home-outline' size={20} color={color}/>
        )
      }} />
      <Drawer.Screen name="LeaderBoard" component={LeaderBoard} options={{
        drawerIcon: ({color}) =>(
          <Ionicons name='home-outline' size={20} color={color} options={{
            drawerIcon: ({color}) =>(
              <Ionicons name='home-outline' size={20} color={color}/>
            )
          }}/>
        )
      }} />
      <Drawer.Screen name="Performance" component={Performance} options={{
        drawerIcon: ({color}) =>(
          <Ionicons name='home-outline' size={20} color={color}/>
        )
      }}/>
      <Drawer.Screen name="Platform" component={PlatForm} options={{
        drawerIcon: ({color}) =>(
          <Ionicons name='home-outline' size={20} color={color}options={{
            drawerIcon: ({color}) =>(
              <Ionicons name='home-outline' size={20} color={color} options={{
                drawerIcon: ({color}) =>(
                  <Ionicons name='home-outline' size={20} color={color}/>
                )
              }}/>
            )
          }}/>
        )
      }} />
     
      <Drawer.Screen name="QuizBolean" component={QuizBolean} options={{
        drawerIcon: ({color}) =>(
          <Ionicons name='home-outline' size={20} color={color}/>
        )
      }}/>
      <Drawer.Screen name="QuizColumn" component={QuizColumn} options={{
        drawerIcon: ({color}) =>(
          <Ionicons name='home-outline' size={20} color={color}/>
        )
      }}/>
      <Drawer.Screen name="Played Quiz" component={SpinWheel} options={{
        drawerIcon: ({color}) =>(
          <Ionicons name='home-outline' size={20} color={color}/>
        )
      }}/>
      <Drawer.Screen name="QuizName" component={QuizName} options={{
        drawerIcon: ({color}) =>(
          <Ionicons name='home-outline' size={20} color={color}/>
        )
      }}/>
      <Drawer.Screen name="QuizOption" component={QuizOption} options={{
        drawerIcon: ({color}) =>(
          <Ionicons name='home-outline' size={20} color={color}/>
        )
      }}/>
      <Drawer.Screen name="QuizRule" component={QuizRule} options={{
        drawerIcon: ({color}) =>(
          <Ionicons name='home-outline' size={20} color={color}/>
        )
      }}/>
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;