import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const drawSvg = {
	initial: { pathLength: 0 },
	final: {
		pathLength: 1,
		transition: { duration: 3.5, ease: 'easeInOut' },
	},
};
export default function Header() {
	return (
		<div className='w-full border-b p-5 flex justify-center items-center gap-3 text-white border-gray-700 sticky top-0 backdrop-blur-sm z-50'>
			<Link to={`/`}>
				<motion.div
					className=' flex justify-center items-center gap-3 cursor-pointer p-1 select-none'
					whileHover={{
						scale: 1.1,
						textShadow: '0px 0px 8px rgb(249, 247, 243)',
					}}
					transition={{ type: 'tween' }}
				>
					<div className='w-9 '>
						<motion.svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 640 512'
						>
							<motion.path
								fill='transparent'
								d='M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z'
								strokeWidth='20'
								stroke='rgb(255, 255, 255)'
								variants={drawSvg}
								initial='initial'
								animate='final'
							/>
						</motion.svg>
					</div>
					<div className='text-3xl font-extrabold'>The Cinema</div>
				</motion.div>
			</Link>
		</div>
	);
}
