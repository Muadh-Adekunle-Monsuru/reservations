import { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Couch from '../components/Couch';
import { callApi } from '../components/api';
import axios from 'axios';
import { AnimatedLayout } from './AnimatedLayout';
export default function Booking() {
	const [selectedCouch, setSelectedCouch] = useState([]);
	const [taken, setTaken] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		const callApi = async function () {
			try {
				axios
					.get('http://localhost:3001/')
					.then((response) => {
						response.data.map((val) => {
							setTaken((prevArr) => [...prevArr, Number(val.seatID)]);
						});
					})
					.catch((e) => console.log(e))
					.finally(() => createCouch());
			} catch (e) {
				console.log('Error calling api', e);
			}
		};
		callApi();
	}, []);

	const selectCouch = function (id) {
		if (taken.includes(id)) {
			return;
		}
		if (selectedCouch.includes(id)) {
			let newArr = selectedCouch.filter((val) => val !== id);
			setSelectedCouch(newArr);
		} else {
			setSelectedCouch((val) => [...val, id]);
		}
	};
	const createCouch = function () {
		const couchComponents = [];
		for (let i = 1; i < 104; i++) {
			if (i == 1 || i == 98) {
				couchComponents.push(
					<div key={i} className='grid grid-cols-subgrid gap-4 col-span-3'>
						<div className='col-start-3'>
							<Couch key={i} id={i} selectCouch={selectCouch} taken={taken} />
						</div>
					</div>
				);
				continue;
			} else if (i == 7) {
				couchComponents.push(
					<div key={i} className='grid grid-cols-subgrid gap-4 col-span-2'>
						<div className='col-start-1'></div>
					</div>
				);
				continue;
			} else if (i == 8 || i == 18 || i == 78 || i == 88) {
				couchComponents.push(
					<div key={i} className='grid grid-cols-subgrid gap-4 col-span-1'>
						<div className='col-start-1'></div>
					</div>
				);
				continue;
			} else if (i == 17 || i == 27 || i == 87 || i == 97) {
				couchComponents.push(
					<div key={i} className='grid grid-cols-subgrid gap-4 col-span-1'>
						<div className='col-start-1'></div>
					</div>
				);
				continue;
			}
			couchComponents.push(
				<Couch key={i} id={i} selectCouch={selectCouch} taken={taken} />
			);
		}
		return couchComponents;
	};
	const addReservation = function (event: { preventDefault: () => void }) {
		event.preventDefault();
		let reserved = JSON.stringify(selectedCouch);
		// console.log(stringy);
		axios
			.post('http://localhost:3001/test', { reserved })
			.then(() => callApi())
			.finally(() => {
				navigate('/success');
			});
	};
	return (
		<AnimatedLayout>
			<form onSubmit={addReservation}>
				<div className='text-white'>
					<div>
						<h1>Choose Seat</h1>
					</div>
					<div className='w-full flex justify-center py-5'>
						<div className='w-3/4 md:w-1/2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='-0.1 -1.6 14.2 1.7'
							>
								<path
									d='m 0 0 c 5 -2 9 -2 14 0'
									stroke='#FF5555'
									strokeWidth='0.1'
									fill='none'
								/>
							</svg>
						</div>
					</div>
					<div className='flex justify-center px-10 py-14'>
						<div className='grid  grid-cols-10 w-full md:w-1/2 gap-5 '>
							{createCouch()}
						</div>
					</div>

					<div className='flex flex-col justify-center'>
						<div className='font-bold flex justify-center items-center gap-5'>
							<div>● Available</div>
							<div className='text-[#FF5555]'>● Selected</div>
							<div className='text-gray-600 font-bold'>● Reserved</div>
						</div>
						<AnimatePresence>
							{selectedCouch.length > 0 && (
								<motion.div
									className='mt-3 p-5 border-gray-600 rounded-lg backdrop-blur-md w-auto m-auto'
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.3 }}
								>
									<span className='font-bold'>Selected Seats: </span>
									{selectedCouch.length && selectedCouch.join(', ')}
								</motion.div>
							)}
						</AnimatePresence>
					</div>

					<div className='w-full flex justify-center items-center p-10 shadow-xl'>
						{/* <Link to={`/success`}> */}
						<button
							className='py-5 px-10 border bg-slate-500 w-40 rounded-lg hover:scale-105 transtion ease-in-out duration-200'
							type='submit'
						>
							Get Ticket
						</button>
						{/* </Link> */}
					</div>
				</div>
			</form>
		</AnimatedLayout>
	);
}
