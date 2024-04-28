import { useState } from 'react';
import { AnimatedLayout } from './AnimatedLayout';
import Lottie from 'lottie-react';
import hightlight from '../assets/highligh.json';
import Modal from '../components/Modal';
import { useLocation } from 'react-router-dom';

export default function Success() {
	const [showModal, setShowModal] = useState(false);
	const location = useLocation();
	const seats = location.state.seats;

	return (
		<AnimatedLayout>
			<div className='min-h-screen overflow-hidden'>
				<div className='h-screen text-white flex flex-col justify-center items-center gap-10'>
					<Modal
						showModal={showModal}
						setShowModal={setShowModal}
						seats={seats}
					/>
					<div className=''>
						<div className='text-center  text-7xl font-bold md:px-40'>
							Your favorite movie is{' '}
							<div className='relative'>
								<div className='absolute w-72 top-[-2.5rem] md:left-[33%] left-14'>
									<Lottie animationData={hightlight} loop={false} />
								</div>
								booked!
							</div>
						</div>
						<div className=' p-5 border-gray-600 rounded-lg backdrop-blur-md px-auto md:w-1/4 m-auto w-3/4 mt-20'>
							<span className='font-bold'>Selected Seats: {seats} </span>
						</div>
					</div>
					<div className='w-full flex justify-center items-center p-10 shadow-xl'>
						<button
							className='select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-5 px-10 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] cursor-pointer disabled:opacity-50 disabled:shadow-none'
							type='submit'
							onClick={() => setShowModal(true)}
						>
							Share Ticket
						</button>
					</div>
				</div>
			</div>
		</AnimatedLayout>
	);
}
