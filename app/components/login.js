let React = require('react-native');
let FBSDKLogin = require('react-native-fbsdklogin');
let FBSDKCore = require('react-native-fbsdkcore');

const {
  View,
} = React;

const {
  FBSDKLoginButton,
} = FBSDKLogin;

const {
  FBSDKAccessToken,
} = FBSDKCore;

class Login extends React.Component{
  render() {
    return (
      <View>
        <FBSDKLoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              alert('Error logging in.');
            } else {
              if (result.isCanceled) {
                alert('Login cancelled.');
              } else {
                FBSDKAccessToken.getCurrentAccessToken((token) => {
                  console.log(token.tokenString);
                })
              }
            }
          }}
          onLogoutFinished={() => console.log('Logged out.')}
          readPermissions={[]}
          publishPermissions={['publish_actions']}/>
      </View>
    );
  }
};

module.exports = Login;

