import React from 'react';
import Header from './components/Header';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
export default function App() {
	const location = useLocation();
	const element = useOutlet();
	return (
		<div className='bg-gray-900 bg-image bg-contain h-full min-h-screen'>
			<Header />
			<AnimatePresence mode='wait' initial={true}>
				{element && React.cloneElement(element, { key: location.pathname })}
			</AnimatePresence>
		</div>
	);
}
