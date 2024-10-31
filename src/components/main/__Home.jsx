import { useRef, useState, useEffect } from 'react';
import Banner from '../../pages/Banner';
import Pics from '../main/Pics';

export default function Home() {
	const [Scrolled, setScrolled] = useState(0);
	const ref_el = useRef(null);
	const ref_posArr = useRef([]);

	const getPos = () => {
		ref_posArr.current = [];
		for (const el of ref_el.current.children) ref_posArr.current.push(el.offsetTop);
		console.log(ref_posArr.current);
	};

	const handleScroll = () => {
		setScrolled(window.scrollY);
	};

	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<main ref={ref_el}>

			<Banner />
			<Pics Scrolled={Scrolled} pos={ref_posArr.current[1]} />
			
			
		</main>
	);
}
