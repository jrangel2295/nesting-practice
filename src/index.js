import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import './index.css'

const App = () => {
	return (
		<div className="ui-container">
			<ApprovalCard>
				<CommentDetail
					userPicture={faker.image.image()}
					comments="You did it!"
					author="sam"
					timeAgo="Today at 4:45PM"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					userPicture={faker.image.image()}
					comments="Hell yea!"
					author="jane"
					timeAgo="Today at 6:00PM"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					userPicture={faker.image.image()}
					comments="very nice!"
					author="rob"
					timeAgo="Yesterday at 12:00AM"
				/>
			</ApprovalCard>
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'))
