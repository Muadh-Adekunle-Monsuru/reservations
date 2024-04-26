import { Link } from 'react-router-dom';
export default function Header() {
	return (
		<div className='w-full border-b p-5 flex justify-center items-center gap-3 text-white border-gray-700 sticky top-0 backdrop-blur-sm'>
			<Link to={`/`}>
				<div className=' flex justify-center items-center gap-3 cursor-pointer p-1 select-none'>
					<div className='w-9 '>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
							<path
								fill='#ffffff'
								d='M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z'
							/>
						</svg>
					</div>
					<div className='text-3xl font-extrabold'>The Cinema</div>
				</div>
			</Link>
		</div>
	);
}
