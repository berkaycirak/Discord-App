import Header from './components/Header';
import Hero from './components/Hero';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
} from 'react-router-dom';
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
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
