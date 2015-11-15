let React = require('react-native');
let Dashboard = require('./dashboard');
let Login = require('./login');

const {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

class Landing extends React.Component{
  handleLogin() {
    this.props.navigator.push({
      title: 'didU Dashboard',
      component: Dashboard,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.login}
          onPress={this.handleLogin.bind(this)}
          underlayColor='white'>
          <Text style={styles.loginText}> Login with Facebook </Text>
        </TouchableHighlight>
        <Login />
      </View>
    );
  }
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  login: {
    height: 45,
    backgroundColor: 'white',
    borderColor: 'white',
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
