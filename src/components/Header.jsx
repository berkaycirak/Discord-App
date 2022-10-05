import React from 'react';

function Header() {
	return (
		<header className='flex items-center justify-between py-4 px-6 bg-black  '>
			<a href='/'>
				<img
					src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/62594fdd2eb6504fca0545cb_364fc8a0ee7fcebf47ca6ebd16ec12f1%20(1).svg'
					alt=''
					className='w-40 h-12 object-contain'
				/>
			</a>
			<div className='hidden lg:flex space-x-6 text-white'>
				<a className='link'>Download</a>
				<a className='link'>Why Discord</a>
				<a className='link'>Nitro</a>
				<a className='link'>Safety</a>
				<a className='link'>Support</a>
			</div>
			<div className='flex space-x-4 '>
				<button className='bg-white rounded-full p-2 text-xs md:text-sm px-4 focus:outline-none font-semibold'>
					Login
				</button>
			</div>
		</header>
	);
}

export default Header;
