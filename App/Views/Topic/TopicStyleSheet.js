'use strict';

var React = require('react-native');

module.exports = React.StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: '#ffffff',
	},
	header: {
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		//borderColor: '#e9e9e9',
		//borderBottomWidth: 1,
		padding: 30,
		textAlign:'center',
	},
	title: {
		fontSize: 18,
		//fontWeight: 'bold',
		textAlign: 'center'
	},
	info: {
		fontSize: 12,
		color: '#666666',
		textAlign: 'right',
		marginTop: 20,
	},
	contentWrapper: {
		borderBottomWidth: 1,
		borderColor: '#cccccc',
	},
	content: {
		fontSize: 14,
		color: '#666666',
		padding: 10,
	},
	node_name: {
		backgroundColor: '#f5f5f5',
		color: '#778087',
		marginRight: 5
	},
	user: {
		color: '#666666',
		marginRight: 5,
		marginLeft: 5
	}
});
