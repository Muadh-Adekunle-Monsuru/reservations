import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as emailjs from '@emailjs/browser';
const backdrop = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
};
export default function Modal({ showModal, setShowModal }) {
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
		name: '',
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
			},
			function (err) {
				console.log('FAILED...', err);
			}
		);
		console.log(formData);
	};
	return (
		<AnimatePresence mode='wait'>
			{showModal && (
				<motion.div
					variants={backdrop}
					initial='hidden'
					animate='visible'
					className='w-full h-full absolute bg-gray-800/70 z-40 flex justify-center items-center'
				>
					<div className='h-3/4 md:w-1/4 w-3/4 bg-slate-300 p-10'>
						<div
							onClick={() => setShowModal(false)}
							className='cursor-pointer text-blue-900 text-right font-bold uppercase text-xs'
						>
							Close
						</div>
						<form onSubmit={handleSubmit} className='space-y-4' id='myform'>
							<div>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-gray-700'
								>
									Name
								</label>
								<input
									type='text'
									id='name'
									name='to_name'
									value={formData.name}
									onChange={handleChange}
									className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
								/>
							</div>
							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-700'
								>
									Email
								</label>
								<input
									type='email'
									id='email'
									name='email'
									value={formData.email}
									onChange={handleChange}
									className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
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
				</motion.div>
			)}
		</AnimatePresence>
	);
}
