import React from 'react';

function Message({ username, userPhoto, message }) {
	return (
		<div>
			<h1>{username}</h1>
			<img src={userPhoto} alt='' />
			<p>{message}</p>
		</div>
	);
}

export default Message;
