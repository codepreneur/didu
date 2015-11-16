let React = require('react-native');

const {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
}= React;

class TutorialThree extends React.Component{
  viewRequest() {
    console.log('view request');
  }
  myJourney() {
    console.log('my journey');
  }
  home() {
    console.log('home');
  }
  render() {
    return (
     <View style={styles.container}>
      <Image 
        style={styles.image}
        resizeMode={Image.resizeMode.contain}
        source={require('./img/mountainbiking.png')}>

        <TouchableHighlight
          style={styles.button}
          onPress={this.viewRequest.bind(this)}
          underlayColor='white'>
          <Text style={styles.buttonText}>View sent request</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={this.myJourney.bind(this)}
          underlayColor='white'>
          <Text style={styles.buttonText}>Go to my journey</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={this.home.bind(this)}
          underlayColor='white'>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableHighlight>

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
    justifyContent: 'center',
  },
  buttonText: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 20,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: 'yellow',
    height: 60,
    borderRadius: 5,
    margin: 20,
  },
});

module.exports = TutorialThree;
