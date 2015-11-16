let React = require('react-native');

const {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableHighlight,
}= React;

class TutorialOne extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      goal: '',
      frequency: '',
      duration: '',
    }
  }
  handleChange(e) {
    console.log('input change');
    this.setState({
      goal: e.nativeEvent.text,
      frequency: e.nativeEvent.text,
      duration: e.nativeEvent.text,
    });
  }
  handleSubmit() {
    console.log('submit');
    let goal = this.state.goal;
    let frequency = this.state.frequency;
    let duration = this.state.duration;
    this.setState({
      goal: '',
      frequency: '',
      duration: '',
    });
  }
  render() {
    return (
     <View style={styles.container}>
      <Image 
        style={styles.image}
        resizeMode={Image.resizeMode.contain}
        source={require('./img/snowboarding.png')}>

        <Text style={styles.text}>I want to #</Text>
        <TextInput 
          style={styles.textInput}
          value={this.state.goal}
          onChange={this.handleChange.bind(this)}
          placeholder='e.g. #RiseEarly'/>
        <Text style={styles.text}>(by  how frequent) </Text>
        <TextInput 
          style={styles.textInput}
          value={this.state.frequency}
          onChange={this.handleChange.bind(this)}
          placeholder='daily'/>
        <Text style={styles.text}>for </Text>
        <TextInput 
          style={styles.textInput}
          value={this.state.duration}
          onChange={this.handleChange.bind(this)}
          placeholder='two weeks'/>

        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor='white'>
          <Text style={styles.buttonText}>Yes, I do > </Text>
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
  button: {
  
  },
  buttonText: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
  
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  textInput: {
    padding: 10,
    height: 60,
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 1,
    borderRadius: 5,
  },
});

module.exports = TutorialOne;
