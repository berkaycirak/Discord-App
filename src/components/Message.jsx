import moment from 'moment';
import React from 'react';
import { useUserInfo } from '../storage/user/userSlice';

function Message({
	username,
	userPhoto,
	message,
	timestamp,
	email,
	id,
	onDelete,
}) {
	const user = useUserInfo();

	return (
		<div className='flex items-center p-1 pl-5 my-5 mr-2 group '>
			<img
				src={userPhoto}
				alt=''
				className='h-10 rounded-full cursor-pointer mr-3 hover:shadow-2xl'
			/>
			<div className=' flex flex-col'>
				<h4 className='flex items-center space-x-2 font-medium '>
					<span className='hoveR:underline text-white text-sm cursor-pointer'>
						{username}
					</span>
					<span className='text-[#72767d] text-xs'>
						{moment(timestamp?.toDate().getTime()).format('lll')}
					</span>
				</h4>
				<p className='text-sm text-[#dcddde]'>{message}</p>
			</div>

			{user?.email === email && (
				<div>
					<button
						onClick={() => onDelete(id)}
						className=' items-center justify-center text-red-600 hidden transition-all  group-hover:flex'>
						x
					</button>
				</div>
			)}
		</div>
	);
}

export default Message;
