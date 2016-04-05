/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

var React = require('react-native');
var AboutView = require('./About');
var GroupsView = require('./Groups');
var SearchView = require('./Search');
var {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  NavigatorIOS,
  Image
  } = React;

var IndexView = React.createClass({
  statics: {
    title: 'index',
    description: 'Home'
  },

  getInitialState: function () {
    return {
      selectedBar: 'group'
    };
  },

  _renderContent: function (title, component) {
    return (
      <NavigatorIOS
        style = {styles.container}
        initialRoute={{
          title: title,
          component: component
        }} />
    );
  },

  render: function () {
    return (
      <TabBarIOS selectedTab={this.state.selectedBar}>
        <TabBarIOS.Item
          title = '首页'
          key = 'group'
          name = 'group'
          //icon = {require('image!groups')}
          //systemIcon = 'more'
          selected = {this.state.selectedBar == 'group'}
          onPress = {() => this.setState({selectedBar: 'group'})}
        >
          {this._renderContent('D4ME', GroupsView)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title = '专题'
          key = 'search'
          name = 'search'
          //systemIcon = 'more'
          selected = {this.state.selectedBar == 'search'}
          onPress = {() => this.setState({selectedBar: 'search'})}
        >
          {this._renderContent('D4ME', SearchView)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title = '我的'
          key = 'about'
          name = 'about'
          selected = {this.state.selectedBar == 'about'}
          systemIcon = 'more'
          onPress = {() => this.setState({selectedBar: 'about'})}
        >
          {this._renderContent('D4ME', AboutView)}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});
var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = IndexView;

AppRegistry.registerComponent('DressProject', () => IndexView);
