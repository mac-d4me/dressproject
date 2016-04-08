'use strict';

var React = require('react-native');

module.exports = React.StyleSheet.create({
	container: {
		backgroundColor: '#ffffff',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		padding: 10,
		borderBottomWidth: 1,
		borderColor: '#E2E2E2',
		width:200

	},
	avatar: {
		alignSelf: 'center',
		width: 180,
		height: 200,
		justifyContent: 'center',
		borderRadius: 3,
	},


	title: {
		fontSize: 12,
		textAlign: 'center',
		color: '#555555',
		marginTop: 5,
	},
	info: {
		color: 'rgb(116,78,56)',
		fontSize: 12,
		textAlign: 'center',
		marginTop: 5,
	},
	


	replyNumWrapper: {
		width: 30,
		marginLeft: 8,
		marginRight: 2,
		justifyContent: 'center',
		alignSelf: 'center',
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
