import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
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


const Drawer = createDrawerNavigator();

const App = ()=> {
 
  return (
    <NavigationContainer>
     
      <Drawer.Navigator>
      <Drawer.Screen name="Question" component={Question} />
      <Drawer.Screen name="Quiz" component={Quiz} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;