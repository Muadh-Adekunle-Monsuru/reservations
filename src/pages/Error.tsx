import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div
			id='error-page'
			className='flex items-center justify-center h-screen w-full text-white text-5xl flex-col gap-5'
		>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
		</div>
	);
}
