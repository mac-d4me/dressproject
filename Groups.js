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
          小山羊裸色高跟鞋
        </Text>
         <Text style={styles.PriceText}>
          $ 1000
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
        <Text style={styles.PriceText}>
          $ 1000
        </Text>
         </View>
        </View>


  <View style={styles.row}>
        <View style={styles.item}>
       
        <Image
          style={styles.titleImage}
          source={{uri:'http://www.nanhunnvjia.com/smedia/up/Image/1(1028).jpg'}}>
        </Image>
        <Text style={styles.titleText}>
          小山羊裸色高跟鞋
        </Text>
        <Text style={styles.PriceText}>
          $ 1000
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
        <Text style={styles.PriceText}>
          $ 1000
        </Text>
         </View>
        </View>    
         <Image
          style={styles.shopCart} source={require('./cart.svg')}>
        </Image>    
      </View>
    );
  }
});

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0
  },
  row: {
    flexDirection: 'row',
    width:345,
    height:262
  },
  item:
  {
  flexDirection: 'column',
  borderRadius: 5,
  width:165,
  height:262,
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
    fontFamily: 'STHeitiSC-Light',
    color: '#000000',
    fontSize: 12,
    fontWeight: '900',
    marginTop: 10,
    alignItems: 'center',
    marginLeft: 25
  },
  PriceText: {
    color: 'rgb(116,78,56)',
    fontSize: 10,
    fontWeight: '900',
    marginTop: 6,
    alignItems: 'center',
    marginLeft: 50
  },
  titleImage: {
    marginTop: 30,
    width:165,
    height:188,
  },
  shopCart: {
    marginTop: 5,
    marginLeft: 310,
    width:46,
    height:46,
  }
});

module.exports = AboutView;