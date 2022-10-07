import React from 'react';
import {
	useChannelId,
	useChannelName,
} from '../storage/channel/channelSlice';

function Chat() {
	const channelId = useChannelId();
	const channelName = useChannelName();
	return (
		<div>
			<div>
				<h1>{channelId}</h1>
				<h2>{channelName}</h2>
			</div>
		</div>
	);
}

export default Chat;
