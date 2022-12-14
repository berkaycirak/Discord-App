import Header from './components/Header';
import Hero from './components/Hero';
import Error from './components/Error';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import Home from './components/Home';
import Chat from './components/Chat';
//That is the newest version of react-router, you should build structure like below.
const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Header />
				<Hero />
			</>
		),
		errorElement: <Error />,
	},
	{
		path: '/channels',
		element: <Home />,
		children: [
			{
				path: '/channels/:id',
				element: <Chat />,
			},
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
