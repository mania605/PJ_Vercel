export default function ColorSelector() {
	const colors = ['255,255,255', '0, 0, 0'];

	const outerStyle = { display: 'flex', gap: 10, position: 'fixed', left: '2vw', top: '5vh', zIndex: 6 };
	const btnStyle = { width: 16, height: 16, cursor: 'pointer', border: '0.1px solid 0.5' };

	const changeColor = color => {
		document.documentElement.style.setProperty('--keyRGB', color);
	};

	return (
		<nav style={outerStyle}>
			{colors.map(color => (
				<button onClick={() => changeColor(color)} key={color} style={{ ...btnStyle, backgroundColor: `rgb(${color})` }}></button>
			))}
		</nav>
	);
}