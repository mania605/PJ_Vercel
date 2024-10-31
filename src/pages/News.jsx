export default function News({ Scroll, pos }) {
	const currentScroll = Scroll - pos || 0;
	const Data = ['text1', 'text2', 'text'];

	const style_h2 = {
		left: currentScroll * 6
	};
	const style_h3 = {
		transform: `translateX(${currentScroll * 1.5}px)`
	};

	return (
		<section className='news'>
			<h2 style={style_h2}>POST</h2>
			<h3 style={style_h3}>INFORMATION</h3>

			{Data.map((el, idx) => {
				return (
					<article style={{ transform: `translateY(${currentScroll * 0.3 * idx}px)` }} key={idx}>
						{el}
					</article>
				);
			})}
		</section>
	);
}
