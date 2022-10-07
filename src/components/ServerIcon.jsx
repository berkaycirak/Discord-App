import React from 'react';

function ServerIcon({ image }) {
	return (
		<div>
			<img
				src={image}
				alt=''
				className='h-12 cursor-pointer rounded-full transition-all duration-100  hover:rounded-2xl '
			/>
		</div>
	);
}

export default ServerIcon;
