import moment from 'moment';
import React from 'react';
import { useUserInfo } from '../storage/user/userSlice';
import { BsTrash } from 'react-icons/bs';
import AdminPng from '../assets/admin.png';

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
		<div
			className={`flex items-center p-1 pl-5 my-5 mr-2 group ${
				user?.email === email && 'bg-black/5 rounded-md'
			}`}>
			<img
				src={userPhoto}
				alt=''
				className='h-10 rounded-full cursor-pointer mr-3 hover:shadow-2xl'
			/>
			<div className=' flex flex-col'>
				<h4 className='flex items-center space-x-2 font-medium '>
					<span className='hover:underline text-white text-sm cursor-pointer flex justify-center items-center'>
						{username}{' '}
						{email === 'berkaycirak11@gmail.com' && (
							<div className='flex justify-center items-center'>
								<span className='text-red-500 ml-1'>[ADMIN]</span>
								<img
									src={AdminPng}
									alt=''
									className=' animate-spin h-6 ml-2'
								/>
							</div>
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
						className=' flex items-center justify-center text-red-600  opacity-0  transition-[opacity] duration-[500ms]   group-hover:opacity-100'>
						<BsTrash className='ml-4' size={22} />
					</button>
				</div>
			)}
		</div>
	);
}

export default Message;
