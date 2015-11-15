let React = require('react-native');

const {
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View,
} = React;

class Dashboard extends React.Component{
  yourGoal() {
    console.log('go to your goal');
  }
  friendGoal() {
    console.log('go to friends goal');
  }
  publicGoal() {
    console.log('go to public goal');
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode={Image.resizeMode.contain} 
          source={require('./img/girl.png')}>
          <TouchableHighlight
            style={styles.button}
            onPress={this.yourGoal.bind(this)}
            underlayColor='white'>
            <Text style={styles.buttonText}>I have a dream...</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.button}
            onPress={this.friendGoal.bind(this)}
            underlayColor='white'>
            <Text style={styles.buttonText}>Join a friend's journey</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.button}
            onPress={this.publicGoal.bind(this)}
            underlayColor='white'>
            <Text style={styles.buttonText}>Join a public challenge</Text>
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

module.exports = Dashboard;
