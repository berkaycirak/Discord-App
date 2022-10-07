import { BiHash } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setChannelInfo } from '../storage/channels/channelSlice';
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
		<div className='font-medium flex items-center cursor-pointer hover:bg-gray-700 p-1 rounded-md hover:text-white'>
			<BiHash className='mr-2' onClick={setChannel} /> {name}
		</div>
	);
}

export default Channel;
