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
          style={styles.likeIcon}
          source={{uri:'http://www.nanhunnvjia.com/smedia/up/Image/1(1021).jpg'}}>
        </Image>
        <Image
          style={styles.titleImage}
          source={{uri:'http://www.nanhunnvjia.com/smedia/up/Image/1(1028).jpg'}}>
        </Image>
        <Text style={styles.titleText}>
          【生姜】- - 新中式风格
        </Text>
         <Text style={styles.descText}>
          一次机缘巧合一次机缘巧合一次机缘巧合一次机缘巧合一次机缘巧合
        </Text>
         </View>
        </View>
         <Image
          style={styles.shopCart}
          source={{uri:'.'}}>
        </Image> 
      </View>
    );
  }
});


var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 0
  },
  row: {
    flexDirection: 'row',
    width:345,
    height:449,
    marginTop: 40,
  },
  item:
  {
  flexDirection: 'column',
  borderRadius: 5,
  width:345,
  height:449,
  margin:4,
  backgroundColor: 'white',
  shadowColor: '#E9E9E9',
  borderRadius: 4,
  position: 'relative'
  },
  likeIcon: {
    position:'absolute',
    bottom: 1.5,
    right: 0.5,
  },
  titleText: {
    fontFamily: 'Heiti SC',
    color: '#000000',
    fontSize: 14,
    fontWeight: '900',
    marginTop: 10,
    alignItems: 'center',
    marginLeft: 15,
    letterSpacing:1,
  },
  descText: {
    color: '#000000',
    fontSize: 10,
    fontWeight: '900',
    marginTop: 6,
    alignItems: 'center',
    marginLeft: 18
  },
  titleImage: {
    marginTop: 30,
    width:345,
    height:345,
  },
  shopCart: {
    marginTop: 80,
    marginLeft: 320,
    width:46,
    height:46,
    position:'absolute',
  }
});

module.exports = AboutView;