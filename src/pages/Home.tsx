import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedLayout } from './AnimatedLayout';
export default function Home() {
	return (
		<AnimatedLayout>
			<div className='text-white md:px-32'>
				<div>
					<section className='w-full text-white py-10 md:py-20'>
						<div className='px-4 md:px-6 grid md:grid-cols-2 gap-14 items-center'>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.1, duration: 2.3, type: 'just' }}
							>
								<h1 className='text-2xl md:text-4xl lg:text-6xl font-bold mb-4'>
									The Shawshank Redemption
								</h1>
								<p className='text-gray-400 text-lg mb-8'>1994</p>
								<p className='text-gray-300 text-wrap md:text-xl'>
									Two imprisoned men bond over a number of years, finding solace
									and eventual redemption through acts of common decency.
								</p>
							</motion.div>
							<motion.div
								animate={{ scale: 1.1 }}
								transition={{ type: 'tween' }}
								className='items-center justify-center flex'
							>
								<img
									alt='The Shawshank Redemption'
									className='rounded-lg shadow-lg'
									height={600}
									src='/poster.jpg'
									style={{
										aspectRatio: '600/900',
										objectFit: 'cover',
									}}
									width={300}
								/>
							</motion.div>
						</div>
					</section>
					<section className='w-full py-20 md:py-20'>
						<div className='mx-auto px-4 md:px-6'>
							<h2 className='text-3xl md:text-4xl font-bold mb-8'>Plot</h2>
							<p className='text-gray-600 dark:text-gray-400 text-lg mb-12'>
								Andy Dufresne, a successful banker, is sentenced to life
								imprisonment at the Shawshank prison for the murder of his wife
								and her lover, despite his claims of innocence. Over the next
								two decades, he befriends a fellow prisoner, Red, and finds ways
								to make life more bearable for his fellow inmates.
							</p>
							<h2 className='text-3xl md:text-4xl font-bold mb-8 mt-16'>
								Reviews
							</h2>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
								<motion.blockquote
									className='p-6 bg-gray-100 dark:bg-gray-800 rounded-lg'
									whileInView={{ x: 10 }}
									transition={{ duration: 0.5, type: 'tween' }}
								>
									<p className='text-gray-600 dark:text-gray-400 italic mb-4'>
										"A powerful film that explores the human spirit and the
										power of hope."
									</p>
									<cite className='text-gray-600 dark:text-gray-400 text-sm'>
										- Roger Ebert, Chicago Sun-Times
									</cite>
								</motion.blockquote>
								<motion.blockquote
									className='p-6 bg-gray-100 dark:bg-gray-800 rounded-lg'
									whileInView={{ x: -10 }}
									transition={{ duration: 0.5, type: 'tween' }}
								>
									<p className='text-gray-600 dark:text-gray-400 italic mb-4'>
										"A masterpiece of storytelling, with superb performances and
										a timeless message."
									</p>
									<cite className='text-gray-600 dark:text-gray-400 text-sm'>
										- Peter Travers, Rolling Stone
									</cite>
								</motion.blockquote>
								<motion.blockquote
									className='p-6 bg-gray-100 dark:bg-gray-800 rounded-lg'
									whileInView={{ x: 10 }}
									transition={{ duration: 0.5, type: 'tween' }}
								>
									<p className='text-gray-600 dark:text-gray-400 italic mb-4'>
										"A film that reminds us of the resilience of the human soul
										and the power of friendship."
									</p>
									<cite className='text-gray-600 dark:text-gray-400 text-sm'>
										- Janet Maslin, The New York Times
									</cite>
								</motion.blockquote>
								<motion.blockquote
									className='p-6 bg-gray-100 dark:bg-gray-800 rounded-lg'
									whileInView={{ x: -10 }}
									transition={{ duration: 0.5, type: 'tween' }}
								>
									<p className='text-gray-600 dark:text-gray-400 italic mb-4'>
										"A timeless classic that deserves its place among the
										greatest films of all time."
									</p>
									<cite className='text-gray-600 dark:text-gray-400 text-sm'>
										- James Berardinelli, ReelViews
									</cite>
								</motion.blockquote>
							</div>
						</div>
					</section>
				</div>
				<div className='w-full flex justify-center items-center p-10 shadow-xl'>
					<Link to={`booking`}>
						<div className='py-5 px-10 border bg-slate-500 w-40 rounded-lg hover:scale-105 transtion ease-in-out duration-200'>
							Get Ticket
						</div>
					</Link>
				</div>
			</div>
		</AnimatedLayout>
	);
}
