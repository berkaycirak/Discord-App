import { Navigate } from 'react-router-dom';
import { useUserInfo } from '../storage/user/userSlice';
import discordLogo from '../assets/discord-logo.svg';
import ServerIcon from './ServerIcon';
import hotChili from '../assets/hot-chili.svg';
import { uuidv4 } from '@firebase/util';
import { AiOutlinePlus, AiOutlineDown } from 'react-icons/ai';
import Channel from './Channel';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useEffect, useState } from 'react';

function Home() {
	console.log('I am rendering');
	const user = useUserInfo();
	const [channels, setChannels] = useState([]);

	// Create collection if there is no, otherwise add document into the collection with given data.
	const handleAdd = async () => {
		const channelName = prompt('Enter your channelName');
		if (channelName) {
			const docRef = await addDoc(collection(db, 'channels'), {
				channelName,
				id: uuidv4(),
			});
			console.log('Document written with ID: ', docRef.id);
		}
	};

	// onSnapshot is an eventlistener for cloud firestore. It fires callback when collection is changed. At the end of useEffect, we should remove that eventListener, otherwise we have a bad optimization.
	// Do not forget, there is a new reference of newChannels array in each time, channels are not same even if their value looks like same. They will have a different address on RAM.
	useEffect(() => {
		const unsub = onSnapshot(
			collection(db, 'channels'),
			(snapshot) => {
				let newChannels = [];
				snapshot.docs.forEach((doc) => {
					const { channelName, id } = doc.data();
					newChannels.push({
						channelName,
						id,
					});
				});
				setChannels(newChannels);
			}
		);
		return () => {
			unsub();
		};
	}, []);

	return (
		<>
			{!user.accessToken && <Navigate to='/' />}
			<div className='flex h-screen'>
				<div className='flex flex-col space-y-3 bg-[#202225] p-3 min-w-max'>
					<div className='server-default hover:bg-discord_purple'>
						<img src={discordLogo} alt='logo' className='h-5' />
					</div>
					<hr className='border-gray-700 border w-8 mx-auto' />
					<ServerIcon image={hotChili} />
					<ServerIcon image={hotChili} />
					<ServerIcon image={hotChili} />
					<ServerIcon image={hotChili} />
					<div className='server-default hover:bg-discord_green group'>
						<AiOutlinePlus
							size={30}
							className='text-discord_green h-7 group-hover:text-white '
						/>
					</div>
				</div>
				<div className='bg-[#2f3136] flex flex-col min-w-max'>
					<h2 className='flex text-white font-bold text-sm items-center justify-between border-b border-gray-800 p-4 hover:bg-[#34373c] cursor-pointer'>
						Official Hot Chili Server...
						<AiOutlineDown className='h-5 ml-2 w-5' />
					</h2>
					<div className='text-[#8e9297] flex-grow overflow-y-scroll scrollbar-hide'>
						<div className='flex items-center p-2 mb-2'>
							<AiOutlineDown className='h-3 mr-2' />
							<h4 className='font-semibold'>Channels</h4>
							<AiOutlinePlus
								className='h-6 ml-auto cursor-pointer hover:text-white'
								onClick={handleAdd}
							/>
						</div>
						<div className='flex flex-col space-y-2 px-2 mb-4'>
							{/* index is not proper way, you should use unique id for key prop. */}
							{channels.map((channel) => (
								<Channel
									key={channel.id}
									name={channel.channelName}
									id={channel.id}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
