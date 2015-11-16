let React = require('react-native');

const {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableHighlight,
}= React;

class TutorialTwo extends React.Component{
  render() {
    return (
     <View style={styles.container}>
      <Image 
        style={styles.image}
        resizeMode={Image.resizeMode.contain}
        source={require('./img/parachute.png')}>
        <Text>My Amazing STEP TWO!!!</Text>
      </Image>
     </View>
    );
  }
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    alignItems: 'center',
  },
});

module.exports = TutorialTwo;
