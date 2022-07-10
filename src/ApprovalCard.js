import React from 'react'

const ApprovalCard = (props) => {
    console.log(props.children)
	return (
		<div className="ui-card">
			<div className="content">{props.children}</div>
			<div className="extraContent">
				<div className="ui-two-buttons">
					<div className="ui basic green button">approve</div>
					<div className="ui basic red button">reject</div>
				</div>
			</div>
		</div>
	)
}

export default ApprovalCard
