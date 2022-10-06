import React from 'react';
import { useRouteError } from 'react-router-dom';

function Error() {
	const error = useRouteError();
	console.log(error);

	return (
		<div className='flex flex-col bg-discord_purple text-white p-4 text-2xl'>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}

export default Error;
