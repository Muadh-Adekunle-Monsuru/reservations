import { Link } from 'react-router-dom';
import { AnimatedLayout } from './AnimatedLayout';
export default function Success() {
	return (
		<AnimatedLayout>
			<div className='text-white'>
				Success
				<div className='w-full flex justify-center items-center p-10 shadow-xl'>
					<Link to={`/`}>
						<div className='py-5 px-10 border bg-slate-500 w-40 rounded-lg hover:scale-105 transtion ease-in-out duration-200'>
							Back Home
						</div>
					</Link>
				</div>
			</div>
		</AnimatedLayout>
	);
}
