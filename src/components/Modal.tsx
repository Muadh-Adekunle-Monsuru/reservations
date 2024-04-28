import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as emailjs from '@emailjs/browser';
const backdrop = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
};
export default function Modal({ showModal, setShowModal, seats }) {
	emailjs.init({
		publicKey: 'LgQKXVuexOU_J5inq',
		limitRate: {
			// Set the limit rate for the application
			id: 'app',
			// Allow 1 request per 10s
			throttle: 10000,
		},
	});
	const [formData, setFormData] = useState({
		to_name: '',
		email: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// You can add your submission logic here, e.g., sending the form data to a server
		emailjs.sendForm('service_yw2a5am', 'template_0sdiqts', '#myform').then(
			function (response) {
				console.log('SUCCESS!', response.status, response.text);
				setShowModal(false);
			},
			function (err) {
				console.log('FAILED...', err);
				setShowModal(false);
			}
		);
	};
	const date = new Date();
	return (
		<AnimatePresence mode='wait'>
			{showModal && (
				<motion.div
					variants={backdrop}
					initial='hidden'
					animate='visible'
					className='w-full h-full absolute bg-gray-800/70 z-40 flex justify-center items-center '
				>
					<div className='h-3/4 md:w-1/2 lg:w-1/4 w-3/4 bg-slate-300 md:p-10 p-2 rounded-lg'>
						<div
							onClick={() => setShowModal(false)}
							className='cursor-pointer text-blue-900 text-right font-bold uppercase text-xs'
						>
							Close
						</div>
						<div className='text-center font-semibold uppercase text-xl py-3'>
							Send Ticket To Email
						</div>
						<div className=' h-3/4 justify-center items-center flex flex-col'>
							<form onSubmit={handleSubmit} className='space-y-4' id='myform'>
								<div>
									<label
										htmlFor='name'
										className='block text-md font-medium text-gray-700'
									>
										Name:
									</label>
									<input
										type='text'
										id='name'
										name='to_name'
										placeholder='Name'
										value={formData.to_name}
										onChange={handleChange}
										className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm  border-gray-300 rounded-md py-2 px-3 text-black'
									/>
								</div>
								<div>
									<label
										htmlFor='email'
										className='block text-md font-medium text-gray-700'
									>
										Email:
									</label>
									<input
										type='email'
										id='email'
										name='email'
										placeholder='Email'
										value={formData.email}
										onChange={handleChange}
										className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm  border-gray-300 rounded-md py-2 px-3 text-black'
									/>
									<input
										type='text'
										id='message'
										name='message'
										value={seats}
										className='hidden'
									/>
									<input
										type='text'
										id='date'
										name='date'
										value={date.toLocaleDateString()}
										className='hidden'
									/>
								</div>
								<button
									type='submit'
									className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
