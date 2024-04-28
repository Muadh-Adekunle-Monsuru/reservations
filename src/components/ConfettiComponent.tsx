import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import confetti from '../assets/confetti.json';

const ConfettiComponent = ({ isAnimating, setIsAnimating }) => {
	const onAnimationComplete = () => {
		setIsAnimating(false);
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 1.2 }}
		>
			{isAnimating && (
				<Lottie
					animationData={confetti}
					loop={false}
					autoplay={isAnimating}
					onAnimationEnd={onAnimationComplete}
					height={'50%'}
				/>
			)}
		</motion.div>
	);
};

export default ConfettiComponent;
