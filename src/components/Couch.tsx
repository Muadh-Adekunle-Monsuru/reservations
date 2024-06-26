import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Couch({ id, selectCouch, taken }) {
	const [fill, setFill] = useState('#FFFFFF');

	return (
		<div
			className='w-5 md:w-7 hover:cursor-pointer'
			onClick={() => {
				selectCouch(id);
				if (taken.includes(id)) {
					setFill('#595959');
					return;
				}
				setFill((val) => (val == '#FFFFFF' ? '#FF5555' : '#FFFFFF'));
			}}
		>
			{taken.includes(id) ? (
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
					<motion.path
						whileTap={{ scale: 0.85 }}
						style={{ border: 'none' }}
						fill={'rgb(75, 85, 99) '}
						d='M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z'
					/>
				</svg>
			) : (
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
					<motion.path
						whileTap={{ scale: 0.85 }}
						style={{ border: 'none' }}
						fill={`${fill}`}
						d='M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z'
					/>
				</svg>
			)}
		</div>
	);
}
