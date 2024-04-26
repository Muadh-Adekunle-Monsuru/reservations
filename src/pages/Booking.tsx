import { Link } from 'react-router-dom';
import Couch from '../components/Couch';
export default function Booking() {
	const createCouch = function () {
		const couchComponents = [];
		for (let i = 0; i < 103; i++) {
			if (i == 0 || i == 97) {
				couchComponents.push(
					<div key={i} className='grid grid-cols-subgrid gap-4 col-span-3'>
						<div className='col-start-3'>
							<Couch key={i} />
						</div>
					</div>
				);
				continue;
			} else if (i == 6) {
				couchComponents.push(
					<div className='grid grid-cols-subgrid gap-4 col-span-2'>
						<div className='col-start-1'></div>
					</div>
				);
				continue;
			} else if (i == 7 || i == 17 || i == 77 || i == 87) {
				couchComponents.push(
					<div className='grid grid-cols-subgrid gap-4 col-span-1'>
						<div className='col-start-1'></div>
					</div>
				);
				continue;
			} else if (i == 16 || i == 26 || i == 86 || i == 96) {
				couchComponents.push(
					<div className='grid grid-cols-subgrid gap-4 col-span-1'>
						<div className='col-start-1'></div>
					</div>
				);
				continue;
			}
			couchComponents.push(<Couch key={i} />);
		}
		return couchComponents;
	};
	return (
		<div className='text-white'>
			<div>
				<h1>Choose Seat</h1>
			</div>
			<div className='w-full flex justify-center py-5'>
				<div className='w-3/4 lg:w-1/2'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='-0.1 -1.6 14.2 1.7'>
						<path
							d='m 0 0 c 5 -2 9 -2 14 0'
							stroke='#FF0000'
							strokeWidth='0.1'
							fill='none'
						/>
					</svg>
				</div>
			</div>
			<div className='flex justify-center px-10 py-5'>
				<div className='grid  grid-cols-10 w-full lg:w-1/2 gap-5 '>
					{createCouch()}
				</div>
			</div>
			<div className='w-full flex justify-center items-center p-10 shadow-xl'>
				<Link to={`/success`}>
					<div className='py-5 px-10 border bg-slate-500 w-40 rounded-lg hover:scale-105 transtion ease-in-out duration-200'>
						Get Ticket
					</div>
				</Link>
			</div>
		</div>
	);
}
