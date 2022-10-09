import moment from 'moment';
import React from 'react';
import { useUserInfo } from '../storage/user/userSlice';
import { BsTrash } from 'react-icons/bs';

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
						{username}{' '}
						{email === 'berkaycirak11@gmail.com' && (
							<span className='text-red-500'>[ADMIN]</span>
						)}
					</span>
					<span className='text-[#72767d] text-xs'>
						{moment(timestamp?.toDate().getTime()).format('lll')}
					</span>
				</h4>
				<p
					className={`text-sm text-[#dcddde] ${
						email === 'berkaycirak11@gmail.com' &&
						'text-green-500 text-lg'
					}`}>
					{message}
				</p>
			</div>

			{user?.email === email && (
				<div>
					<button
						onClick={() => onDelete(id)}
						className=' items-center justify-center text-red-600 hidden transition-all  group-hover:flex'>
						<BsTrash className='ml-4' size={22} />
					</button>
				</div>
			)}
		</div>
	);
}

export default Message;
