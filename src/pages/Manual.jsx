import { useEffect } from 'react';

export default function Music() {
	useEffect(() => {
		const frame = document.querySelector('section');
		const lists = frame.querySelectorAll('article');
		const prev = document.querySelector('.btnPrev');
		const next = document.querySelector('.btnNext');
		const deg = 45; //각각의 article요소가 회전할 각도
		const len = lists.length - 1; //순번이 0부터 시작하므로 전체 개수에서 1을 빼줌
		let i = 0;
		let num = 0;
		let active = 0;

		function activation(index, lists) {
			for (let el of lists) {
				el.classList.remove('on');
			}
			lists[index].classList.add('on');
		}

		//article의 개수만큼 반복
		for (let el of lists) {
			let pic = el.querySelector('.pic');

			//각 article 요소를 45도씩 회전하고 아래로 배치
			el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
			// pic.style.backgroundImage = `url(music_img/member${i + 1}.jpg)`;
			pic.style.backgroundImage = `url(music_img/${i + 1}.png)`;
			i++;
		}

		//prev 버튼 클릭 시
		prev.addEventListener('click', () => {
			//num값을 증가시키며 frame 45도 만큼 증가시키며 시계 방향으로 계속 회전
			num++;
			frame.style.transform = `rotate(${deg * num}deg)`;

			active == 0 ? (active = len) : active--;
			activation(active, lists);
		});

		//next 버튼 클릭시
		next.addEventListener('click', () => {
			//num값을 감소시키며 frame을 45도 만큼 감소시키며 반시계 방향으로 회전
			num--;
			frame.style.transform = `rotate(${deg * num}deg)`;

			active == len ? (active = 0) : active++;
			activation(active, lists);
		});
	}, []);

	return (
		<>
			<figure>
				<h1>
					<strong>AVALLION E-BOOK </strong> <br />
					<span>COSMETIC MANUAL</span>
				</h1>

				<a href='#' className='menu'>
					<i className='fas fa-bars'></i>
				</a>

				<section>
					<article className='on'>
						<div className='inner'>
							<div className='pic'></div>
							<div className='txt'>
								<h2>Lotion</h2>
								<p>Natural hydration boost for radiant skin</p>
							</div>
						</div>
					</article>

					<article>
						<div className='inner'>
							<div className='pic'></div>
							<div className='txt'>
								<h2>Serum</h2>
								<p>Deep skin revitalization with botanical extracts</p>
							</div>
						</div>
					</article>

					<article>
						<div className='inner'>
							<div className='pic'></div>
							<div className='txt'>
								<h2>Essence</h2>
								<p>Replenishes and smooths for supple radiance</p>
							</div>
						</div>
					</article>

					<article>
						<div className='inner'>
							<div className='pic'></div>
							<div className='txt'>
								<h2>Moisturizer</h2>
								<p>Intense daily hydration for lasting comfort</p>
							</div>
						</div>
					</article>

					<article>
						<div className='inner'>
							<div className='pic'></div>
							<div className='txt'>
								<h2>Cleanser</h2>
								<p>Pore-clearing freshness, smooth and pure</p>
							</div>
						</div>
					</article>

					<article>
						<div className='inner'>
							<div className='pic'></div>
							<div className='txt'>
								<h2>Lipstick</h2>
								<p>Vibrant natural color with hydrating feel</p>
							</div>
						</div>
					</article>

					<article>
						<div className='inner'>
							<div className='pic'></div>
							<div className='txt'>
								<h2>Foundation</h2>
								<p>Even skin perfection for a flawless look</p>
							</div>
						</div>
					</article>

					<article>
						<div className='inner'>
							<div className='pic'></div>
							<div className='txt'>
								<h2>Makeup Primer</h2>
								<p>Smooth skin base for long-lasting makeup</p>
							</div>
						</div>
					</article>
				</section>

				<div className='btnPrev'>
					<span>PREV </span>
				</div>
				<div className='btnNext'>
					<span>NEXT </span>
				</div>

				<p>COSMETIC PAMPHLET</p>
			</figure>
		</>
	);
}
