export default function Pics({ Scrolled, pos }) {
	console.log(pos);
	return (
		<section className='pics'>
			<h2 style={{ left: Scrolled - pos || 0 }}>TYPOGRAPHY</h2>
			<div className='box' style={{ transform: `rotate(${Scrolled - pos}deg)` }}></div>
		</section>
	);
}
