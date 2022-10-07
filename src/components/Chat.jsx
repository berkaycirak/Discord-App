import React, { useRef } from 'react';
import {
	useChannelId,
	useChannelName,
} from '../storage/channel/channelSlice';
import { BiHash, BiBell, BiGift, BiHappy } from 'react-icons/bi';
import {
	BsChatDots,
	BsSearch,
	BsQuestionCircleFill,
} from 'react-icons/bs';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { CgInbox } from 'react-icons/cg';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

function Chat() {
	const channelId = useChannelId();
	const channelName = useChannelName();
	const inputRef = useRef('');
	const sendMessage = async (e) => {
		e.preventDefault();
		const docRef = doc(collection(db, 'channels', channelName));
		await setDoc(docRef, {
			hello: 'Hello',
		});
	};
	console.log(inputRef);
	return (
		<div className='flex flex-col flex-grow h-screen '>
			<header className='flex items-center justify-between space-x-5 border-b border-gray-800 p-4 -mt-1'>
				<div className='flex items-center space-x-1 '>
					<BiHash className='h-6 text-gray-600' />
					<h4 className='text-white font-semibold'>{channelName}</h4>
				</div>
				<div className=' flex space-x-3'>
					<BiBell className='icon' />
					<BsChatDots className='icon' />
					<FiUsers className='icon' />
					<div className='flex text-xs p-1 rounded-md bg-black/60'>
						<input
							type='text'
							placeholder='Search'
							className='bg-transparent focus:outline-none text-white pl-1 placeholder-[#727772]'
						/>
						<BsSearch className='h-4 mr-1 text-[#727772] cursor-pointer' />
					</div>
					<CgInbox className='icon' />
					<BsQuestionCircleFill className='icon' />
				</div>
			</header>
			<main className='flex-grow overflow-y-scroll scrollbar-hide'></main>
			<div className='bg-[#40444b] flex items-center p-2 mx-5 mb-7 rounded-md'>
				<AiFillPlusCircle className='icon mr-4 ' size={20} />
				<form className='flex-grow'>
					<input
						type='text'
						disabled={!channelId}
						className='focus:outline-none bg-transparent w-full text-[#dcddde] text-sm'
						placeholder={
							channelId
								? `Message #${channelName}`
								: 'Select a channel'
						}
						ref={inputRef}
					/>
					<button
						className='hidden'
						type='submit'
						onClick={sendMessage}>
						Send
					</button>
				</form>
				<BiGift className='icon mr-2' size={20} />
				<BiHappy className='icon' size={20} />
			</div>
		</div>
	);
}

export default Chat;
