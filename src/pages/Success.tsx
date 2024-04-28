import { useState } from 'react';
import { AnimatedLayout } from './AnimatedLayout';
import Lottie from 'lottie-react';
import hightlight from '../assets/highligh.json';
import Modal from '../components/Modal';
import confetti from '../assets/confetti.json';
import { motion } from 'framer-motion';

export default function Success() {
	const [isAnimating, setIsAnimating] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const onAnimationComplete = () => {
		setIsAnimating(false);
		console.log('is animating is not false');
	};

	return (
		<AnimatedLayout>
			<Modal showModal={showModal} setShowModal={setShowModal} />
			{isAnimating && (
				<div className='absolute max-h-screen overflow-hidden -z-20'>
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 1.2 }}
					>
						{isAnimating && <Lottie animationData={confetti} loop={false} />}
					</motion.div>
				</div>
			)}
			<div className='text-white min-h-screen flex flex-col justify-center gap-10'>
				<div className=''>
					<div className='text-center  text-7xl font-bold md:px-40'>
						Your favorite movie is{' '}
						<div className='relative'>
							<div className='absolute w-72 top-[-2.5rem] md:left-[33%] left-14'>
								<Lottie
									animationData={hightlight}
									loop={false}
									// width={'4rem'}
									// height={'50%'}
								/>
							</div>
							booked!
						</div>
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
		</AnimatedLayout>
	);
}
