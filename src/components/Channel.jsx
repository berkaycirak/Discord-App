import { BiHash } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setChannelInfo } from '../storage/channel/channelSlice';
function Channel({ name, id }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const setChannel = () => {
		dispatch(
			setChannelInfo({
				channelId: id,
				channelName: name,
			})
		);
		navigate(`/channels/${id}`);
	};

	return (
		<div
			onClick={setChannel}
			className='font-medium flex items-center cursor-pointer hover:bg-gray-700 p-1 rounded-md hover:text-white'>
			<BiHash className='mr-2' /> {name}
		</div>
	);
}

export default Channel;
