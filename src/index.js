import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'

const App = () => {
	return (
		<div className="ui-container">
			<CommentDetail author='sam'/>
			<CommentDetail author='jane'/>
			<CommentDetail author='rob'/>
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'))
