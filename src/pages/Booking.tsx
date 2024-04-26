import { Link } from 'react-router-dom';
export default function Booking() {
	return (
		<div className='text-white'>
			Booking
			<Link to={`/success`}>Confirm</Link>
		</div>
	);
}
