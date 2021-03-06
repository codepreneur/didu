let React = require('react-native');
let Dashboard = require('./dashboard');
let Login = require('./login');

const {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View,
} = React;

class Landing extends React.Component{
  handleLogin() {
    this.props.navigator.push({
      title: 'The beginning',
      component: Dashboard,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode={Image.resizeMode.contain}
          source={require('./img/stretching.png')}>
          <Text style={styles.quote}> "Action expresses priorities" </Text>
          <Text style={styles.author}> - Gandhi</Text>
          <TouchableHighlight
            style={styles.login}
            onPress={this.handleLogin.bind(this)}
            underlayColor='white'>
            <Text style={styles.loginText}> Login with Facebook </Text>
          </TouchableHighlight>

          <Login />
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
  quote: {
    paddingTop: 100,
    fontSize: 20,
  },
  author: {
    paddingBottom: 70,
  },
  image: {
    flex: 1,
    alignItems: 'center',
  },
  login: {
    height: 45,
    marginTop: 50,
    backgroundColor: 'yellow',
    borderColor: 'yellow',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  loginText: {
    fontSize: 25, 
  },
});

module.exports = Landing;
