import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button, alert, ScrollView, TouchableOpacity, StatusBar, } from 'react-native';
import { LogBox } from 'react-native';
import Elevations from 'react-native-elevation';


import WheelOfFortune from 'react-native-wheel-of-fortune';

const participants = [
  'MAT',
  'ENG',
  'SCI',
  'MAT',
  'ENG',
  'MAT',
  'ENG',
  'SCI',
];

class SpinWheel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      winnerValue: null,
      winnerIndex: null,
      started: false,
    };
    this.child = null;
  }


  buttonPress = () => {
    this.setState({
      started: true,
    });
    this.child._onPress();
  };

  render() {
    const { navigation } = this.props;
    const wheelOptions = {
      rewards: participants,
      knobSize: 30,
      borderWidth: 10,
      borderColor: '#5B5959',
      innerRadius: 30,
      duration: 6000,
      backgroundColor: 'transparent',
      textAngle: 'horizontal',
      knobSource: require('../assets/Needle.png'),
      onRef: ref => (this.child = ref),
    };
    return (
      <ScrollView style={styles.containers}>
        <View style={[styles.view, {
          height: 60,
          width: '95%',

          paddingRight: 10,


          borderRadius: 9,
          marginLeft: 10,
          marginTop: 4
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
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.innerView}>
                  <View style={styles.innerStyle}>
                    <Image source={require("../assets/Topper.png")}></Image>
                    <Text style={{ paddingHorizontal: 6, }}>Prize: 500 INR</Text>
                  </View>
                </View>
                <View style={[styles.innerView, { marginLeft: 35 },]}>
                  <View style={styles.innerStyle}>
                    <Image source={require("../assets/Participant.png")}></Image>
                    <Text style={{ paddingHorizontal: 6, }}>Participants: 8</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <Text style={styles.mainText}>Press Start to Spin the Wheel</Text>
          <Text style={styles.subText}>Question will be displayed from{'\n'} the selected subject</Text>


          <StatusBar barStyle={'light-content'} />
          <WheelOfFortune
            options={wheelOptions}
            getWinner={(value, index) => {
              this.setState({ winnerValue: value, winnerIndex: index });
            }}
          />
          {!this.state.started && (
            <View style={styles.startButtonView}>
              <TouchableOpacity
                onPress={() => this.buttonPress()}
                style={styles.startButton}>
                <Text style={styles.startButtonText}>Start</Text>
              </TouchableOpacity>
            </View>
          )}
          {this.state.winnerIndex != null && (
            <View style={styles.winnerView}>
              <Text style={styles.winnerText}>
                Subject is {participants[this.state.winnerIndex]}
              </Text>

              <TouchableOpacity
                onPress={() => {
                  this.setState({ winnerIndex: null });
                  this.child._tryAgain();
                }}
                style={styles.tryAgainButton}>
                <Text style={styles.tryAgainText}>Again</Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.buttonView}>

            <TouchableOpacity style={styles.Touchable}>
              <Text style={styles.finalText}>Leave Quiz</Text>
            </TouchableOpacity>

            <Text style={styles.pageNumberText}>4/10</Text>
            <TouchableOpacity style={[styles.Touchable, { width: 65, marginLeft: 65, backgroundColor: '#1DB95B' }]} onPress={() => {navigation.navigate("QuizName")}}>
              <Text style={styles.finalText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default SpinWheel;

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  },
  startButtonView: {
    position: 'absolute',
    top: 10
  },
  startButton: {
    backgroundColor: '#E96363',
    marginTop: 430,
    padding: 5,
    marginLeft: 142,
    height: 55,
    width: 55,
    borderRadius: 55 / 2
  },
  startButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 7,
    paddingLeft: 2
  },
  winnerView: {
    position: 'absolute',
    top: 670,
    left: 105,
    backgroundColor: '#00459E',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 37
  },
  tryAgainButton: {
    padding: 10,
  },
  winnerText: {
    fontSize: 16,
    color: 'white',
    paddingTop: 6
  },
  tryAgainButton: {
    position: 'absolute',

    backgroundColor: '#E96363',
    top: -230,
    left: 37,
    height: 55,
    width: 55,
    borderRadius: 55 / 2

  },
  tryAgainText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingTop: 12
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    marginTop: 5,
  },
  view: {
    flexDirection: 'row',
    paddingTop: 14,
    paddingHorizontal: 5,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    margin: 8,
    ...Elevations[4],
  },
  stile: {
    alignItems: 'center',
    flexDirection: "row",
  },
  test: {

    fontSize: 10,
    paddingRight: 5,
    alignItems: 'flex-start',
  },
  main: {
    color: '#00459E',
    fontSize: 24,
  },
  elev: {
    paddingTop: 10,
    flex: 1,
    borderRadius: 10,
    marginTop: 8,
    backgroundColor: 'white',
    marginHorizontal: 10,
    margin: 8,
    ...Elevations[4]
  },
  blueView: {
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  blueBack: {
    backgroundColor: '#00459E',
    height: 108,
    borderRadius: 7,
  },
  blueText: {
    color: 'white',
    fontSize: 18,
    padding: 5,
  },
  innerView: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 22,
    height: 30,
    width: 132,
    marginLeft: 10,
  },
  innerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 6

  },

  circle: {
    width: 240,
    height: 240,
    borderRadius: 240 / 2,
    backgroundColor: 'white',
    borderColor: '#AF4242',
    borderWidth: 1,
    marginLeft: 130,

    position: 'relative',
    top: 100,
    right: 70
  },
  buttonView: {
    flexDirection: 'row',
    paddingTop: 500,
    paddingBottom: 10,

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
  mainText: {
    fontSize: 23,
    fontWeight: '700',
    paddingTop: 20,
    textAlign: 'center'
  },
  subText: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 10
  },
  smallCircle: {

    backgroundColor: '#E96363',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    position: 'absolute',
    left: 95,
    top: 95

  },
  startText: {
    textAlign: 'center',
    top: 20,
    color: 'white'
  },

});

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native';
// import Ionicon from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome5';
// import Feather from 'react-native-vector-icons/Feather';
// import Snackbar from 'react-native-snackbar-component';
// import { LogBox } from "react-native";

// participants = [
//   'MAT',
//   'ENG',
//   'SCI',
//   'MAT',
//   'ENG',
//   'MAT',
//   'ENG',
//   'SCI',
// ];

// function SpinWheel({ navigation }) {

//   const [winnerValue, setwinnerValue] = useState(null)
//   const [winnerIndex, setwinnerIndex] = useState(null)
//   const [started, setstarted] = useState(false);
//   let child = null;

// }

// buttonPress = () => {
//   this.setState({
//     started: true,
//   });
//   this.child._onPress();
// };

// const buttonPress = () => {
//   setstarted(true)
// }
// return(

// )

// const styles = StyleSheet.create({
//   containers: {
//     flex: 1,
//     backgroundColor: '#F8F8F8'
//   },
//   startButtonView: {
//     position: 'absolute',
//     top: 10
//   },
//   startButton: {
//     backgroundColor: '#E96363',
//     marginTop: 430,
//     padding: 5,
//     marginLeft: 142,
//     height: 55,
//     width: 55,
//     borderRadius: 55 / 2
//   },
//   startButtonText: {
//     fontSize: 20,
//     color: 'white',
//     fontWeight: 'bold',
//     paddingTop: 7,
//     paddingLeft: 2
//   },
//   winnerView: {
//     position: 'absolute',
//     top: 670,
//     left: 105,
//     backgroundColor: '#00459E',
//     borderRadius: 10,
//     paddingHorizontal: 12,
//     height: 37
//   },
//   tryAgainButton: {
//     padding: 10,
//   },
//   winnerText: {
//     fontSize: 16,
//     color: 'white',
//     paddingTop: 6
//   },
//   tryAgainButton: {
//     position: 'absolute',

//     backgroundColor: '#E96363',
//     top: -230,
//     left: 37,
//     height: 55,
//     width: 55,
//     borderRadius: 55 / 2

//   },
//   tryAgainText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//     textAlign: 'center',
//     paddingTop: 12
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#F8F8F8',
//     marginTop: 5,
//   },
//   view: {
//     flexDirection: 'row',
//     paddingTop: 14,
//     paddingHorizontal: 5,
//     alignItems: 'flex-start',
//     justifyContent: 'space-around',
//     backgroundColor: '#ffffff',
//     margin: 8,
//     ...Elevations[4],
//   },
//   stile: {
//     alignItems: 'center',
//     flexDirection: "row",
//   },
//   test: {

//     fontSize: 10,
//     paddingRight: 5,
//     alignItems: 'flex-start',
//   },
//   main: {
//     color: '#00459E',
//     fontSize: 24,
//   },
//   elev: {
//     paddingTop: 10,
//     flex: 1,
//     borderRadius: 10,
//     marginTop: 8,
//     backgroundColor: 'white',
//     marginHorizontal: 10,
//     margin: 8,
//     ...Elevations[4]
//   },
//   blueView: {
//     paddingTop: 10,
//     paddingHorizontal: 12,
//   },
//   blueBack: {
//     backgroundColor: '#00459E',
//     height: 108,
//     borderRadius: 7,
//   },
//   blueText: {
//     color: 'white',
//     fontSize: 18,
//     padding: 5,
//   },
//   innerView: {
//     backgroundColor: 'white',
//     borderRadius: 15,
//     marginTop: 22,
//     height: 30,
//     width: 132,
//     marginLeft: 10,
//   },
//   innerStyle: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     paddingTop: 6

//   },

//   circle: {
//     width: 240,
//     height: 240,
//     borderRadius: 240 / 2,
//     backgroundColor: 'white',
//     borderColor: '#AF4242',
//     borderWidth: 1,
//     marginLeft: 130,

//     position: 'relative',
//     top: 100,
//     right: 70
//   },
//   buttonView: {
//     flexDirection: 'row',
//     paddingTop: 500,
//     paddingBottom: 10,

//   },


//   Touchable: {
//     backgroundColor: '#B92F1D',
//     borderRadius: 10,
//     height: 37,
//     marginHorizontal: 12,
//     width: 110,
//   },
//   finalText: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 16,
//     textAlign: 'center',
//     paddingTop: 5
//   },
//   pageNumberText: {
//     paddingTop: 9,
//     color: '#777777',
//     paddingLeft: 35
//   },
//   mainText: {
//     fontSize: 23,
//     fontWeight: '700',
//     paddingTop: 20,
//     textAlign: 'center'
//   },
//   subText: {
//     fontSize: 18,
//     textAlign: 'center',
//     paddingTop: 10
//   },
//   smallCircle: {

//     backgroundColor: '#E96363',
//     width: 60,
//     height: 60,
//     borderRadius: 60 / 2,
//     position: 'absolute',
//     left: 95,
//     top: 95

//   },
//   startText: {
//     textAlign: 'center',
//     top: 20,
//     color: 'white'
//   },
// });
// export default SpinWheel;