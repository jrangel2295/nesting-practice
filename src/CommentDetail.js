import React from 'react'
import faker from 'faker'

 const CommentDetail = (props) => {
	return (
		<div className="ui-container">
			<div className="comment">
				<a href="/" className="avatar">
					<img alt="avatar" src={faker.image.image()} />
				</a>
				<div className="content">
					<a href="/" className="author">
						{props.author}
					</a>
					<div className="meta-data">
						<span className="date">6:00pm</span>
					</div>
					<div className="text">nice blog dude</div>
				</div>
			</div>
		</div>
	)
}

export default CommentDetail;