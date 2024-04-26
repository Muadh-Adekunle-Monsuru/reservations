import Header from './components/Header';
import { Outlet } from 'react-router-dom';
export default function App() {
	return (
		<div className='bg-gray-900 bg-image bg-contain h-full min-h-screen'>
			<Header />
			<Outlet />
		</div>
	);
}
