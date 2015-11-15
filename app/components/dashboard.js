let React = require('react-native');

const {
  StyleSheet,
  Text,
  View,
} = React;

class Dashboard extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>Amazing didU dashboard!!!!!!</Text>
      </View>
    );
  }
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

module.exports = Dashboard;
