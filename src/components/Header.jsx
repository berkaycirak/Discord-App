import React from 'react';
import { BiMenuAltRight as MenuIcon } from 'react-icons/bi';

function Header() {
	return (
		<header className='flex items-center justify-between py-4 px-6 bg-discord_blue  '>
			<a href='/'>
				<img
					src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/62594fdd2eb6504fca0545cb_364fc8a0ee7fcebf47ca6ebd16ec12f1%20(1).svg'
					alt=''
					className='w-40 h-12 object-contain'
				/>
			</a>
			<div className='hidden lg:flex space-x-6 text-white'>
				<a className='link' href='#'>
					Download
				</a>
				<a className='link' href='#'>
					Why Discord
				</a>
				<a className='link' href='#'>
					Nitro
				</a>
				<a className='link' href='#'>
					Safety
				</a>
				<a className='link' href='#'>
					Support
				</a>
			</div>
			<div className='flex space-x-4 items-center'>
				<button className='bg-white rounded-full p-2 text-xs md:text-sm px-4 focus:outline-none font-medium hover:shadow-2xl hover:text-discord_blurple transition duration-200'>
					Login
				</button>
				<MenuIcon
					size={28}
					className='text-white cursor-pointer hover:text-discord_blurple transition duration-200'
				/>
			</div>
		</header>
	);
}

export default Header;
