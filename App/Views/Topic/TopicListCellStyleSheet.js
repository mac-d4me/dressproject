'use strict';

var React = require('react-native');

module.exports = React.StyleSheet.create({
	container: {
		backgroundColor: '#ffffff',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		padding: 5,
		borderBottomWidth: 1,
		borderColor: '#E2E2E2',
		paddingLeft:15,
		//borderRadius: 10,
	},
	avatar: {
		alignSelf: 'center',
		width: 350,
		height:410,
		marginRight: 10,
		justifyContent: 'center',
		borderRadius: 3,
	},


	title: {
		fontSize: 16,
		textAlign: 'left',
		color: '#000000',
		marginTop:10,
		marginLeft:15
	},
	topic: {
		flex: 1,
		marginBottom: 5,
	},
	info: {
		color: '#aaaaaa',
		fontSize: 12,
		marginTop: 10,
		marginLeft:15
	},
	content: {
		fontSize: 12,
		color: '#555555',
		marginLeft:15
	},


	replyNumWrapper: {
		width: 30,
		marginLeft: 300,
		marginRight: 2,
		marginBottom:0,
	},
	replyNum: {
		backgroundColor: '#98acdf',
		// color: '#333333',
		flex: 1,
		alignItems: 'flex-start',
		height: 18,
		//width: 46,
		justifyContent: 'center',
		borderRadius: 10,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 10,
        paddingRight: 10,
	},
	replyNumText: {
		color: '#ffffff',
		fontWeight: 'bold'
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
