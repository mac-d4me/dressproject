var React = require('react-native');
var { 
  TouchableHighlight, 
  Text ,
  Image,
  View
} = React;

var Style = React.StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  ad: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  link: {
    marginTop: 20,
    color: '#356DD0',
  },
  logo: {
    height: 150,
    width: 150,
  }
});

var About = React.createClass({
  render: function() {
    return (
      <View style={Style.container}>
          <Image style={Style.logo} source={{uri: 'https://ruby-china-files.b0.upaiyun.com/assets/big_logo-5cdc3135cbb21938b8cd789bb9ffaa13.png'}} />
          <Text style={Style.ad}>
          test
          </Text>
          <Text style={Style.ad}>
test
          </Text>


        <TouchableHighlight onPress={() => this._onPress('ReactNative RubyChina', 'http://Dev.d4me.com')}>
          <Text style={Style.link}>
            http://D4ME
          </Text>
        </TouchableHighlight>


      </View>

    );
  },

  _onPress: function(title, url){

    this.props.navigator.push({
      title: title,
      component: require('../Web'),
      passProps: {url: url},
    });

  }
});

module.exports = About;




