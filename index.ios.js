/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
} = React;

var IndexView = React.createClass({
  getInitialState: function() {
      return {
          selectedTab: 'home'
      };
  },
  render: function() {
    return (
        <TabBarIOS selectedTab={this.state.selectedTab}>
            <TabBarIOS.Item accessibilityLabel={"Excellent"}
                selected={this.state.selectedTab === 'home'}
                title="首页"
                name="home"
                icon={{uri: 'icon.png', isStatic: true}}
                onPress={() => {
                    this.setState({
                      selectedTab: 'home'
                    });
                }}>
                <NavigatorIOS style={Style.container}
                    tintColor={'#333344'}
                    initialRoute={{
                      title: 'D4ME',
                      component: require('./App/Views/Home/Home')
                    }}
                    itemWrapperStyle={Style.navigator} />
            </TabBarIOS.Item>

            <TabBarIOS.Item accessibilityLabel={"Nodes"}
                selected={this.state.selectedTab === 'nodes'}
                title="主题"
                name="nodes"
                icon={{uri:'nodes.png'}}
                onPress={() => {
                    this.setState({
                      selectedTab: 'nodes'
                    });
                }}>

                <NavigatorIOS style={Style.container}
                    tintColor={'#333344'}
                    initialRoute={{
                      title: 'D4ME',
                      component: require('./App/Views/Home/Nodes')
                    }}
                    itemWrapperStyle={Style.navigator} />

            </TabBarIOS.Item>

            <TabBarIOS.Item accessibilityLabel={"About"}
                selected={this.state.selectedTab === 'about'}
                title="我的"
                name="about"
                icon={{uri: 'reactnative_logo.png'}}
                onPress={() => {
                    this.setState({
                      selectedTab: 'about'
                    });
                }}>

                <NavigatorIOS style={Style.container}
                    tintColor={'#333344'}
                    initialRoute={{
                      title: 'D4ME',
                      component: require('./App/Views/Home/About')
                    }}
                    itemWrapperStyle={Style.navigator} />

            </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
});

var Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7EAEC'
  },
  navigator: {
    backgroundColor: '#E7EAEC'
  }
});

AppRegistry.registerComponent('DressProject', () => IndexView);
