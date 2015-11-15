/**
 * didU App
 * https://github.com/codepreneur/didu
 */
'use strict';

let React = require('react-native');
let Landing = require('./app/components/landing');

const {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class didu extends React.Component{
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'welcome to didU',
          component: Landing,
        }} />
    );
  }
};

AppRegistry.registerComponent('didu', () => didu);

