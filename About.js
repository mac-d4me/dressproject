'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image
  } = React;

var AboutView = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
        <View style={styles.item}>
        <Image
          style={styles.titleImage}
          source={{uri:'http://www.nanhunnvjia.com/smedia/up/Image/1(1028).jpg'}}>
        </Image>
        <Text style={styles.titleText}>
          小山羊裸色高跟鞋
        </Text>
         </View>
         <View style={styles.item}>
        <Image
          style={styles.titleImage}
          source={{uri:'http://www.nanhunnvjia.com/smedia/up/Image/1(1028).jpg'}}>
        </Image>
        <Text style={styles.titleText}>
          小山羊裸色高跟鞋
        </Text>
         </View>
        </View>
        
      </View>
    );
  }
});


var styles = React.StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0
  },
  row: {
    flexDirection: 'row',
  },
  item:
  {
  flexDirection: 'column',
  borderRadius: 5,
  width:180,
  height:200
  },
  titleText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '900',
    marginTop: 50
  },
  titleImage: {
    width:180,
    height:200
  }
});

module.exports = AboutView;