import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const sentenceVariants = {
	hidden: {},
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1 }
	}
};

export const letterVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { opacity: { duration: 0 } } }
};

export const Typewriter = ({ text, interval = 15000, ...rest }) => {
	const [key, setKey] = useState(0);

	// Reset key to re-trigger animation every `interval` ms
	useEffect(() => {
		const intervalId = setInterval(() => {
			setKey(prevKey => prevKey + 1);
		}, interval);

		return () => clearInterval(intervalId); // Cleanup on unmount
	}, [interval]);

	return (
		<motion.p key={key} variants={sentenceVariants} initial='hidden' animate='visible' {...rest}>
			{text.split('').map((char, i) => (
				<motion.span key={`${char}-${i}`} variants={letterVariants}>
					{char}
				</motion.span>
			))}
		</motion.p>
	);
};
