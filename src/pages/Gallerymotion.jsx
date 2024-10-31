import { useEffect } from 'react';
import { Typewriter } from './Typewriter';

export default function Gallerymotion() {
	useEffect(() => {
		// IE 감지 및 경고
		const ver = navigator.userAgent;
		console.log(ver);

		const isIE = /trident/i.test(ver);
		console.log(isIE);

		if (isIE) {
			alert(
				'익스플로러 브라우저로 접속하셨네요. 이 웹 페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해주세요.'
			);
		}

		// 아이디가 circle인 요소를 찾아서 저장
		const circle = document.querySelector('#circle');
		// 태그명이 article인 요소를 찾아서 저장
		const articles = circle.querySelectorAll('article');

		// article의 전체 갯수만큼 반복을 돌면서 mouseenter, mouseleave 이벤트 연결
		articles.forEach(el => {
			// article에 마우스를 올리면 부모인 #circle의 animation-play-state 값을 "paused"로 변경
			el.addEventListener('mouseenter', () => {
				circle.style.animationPlayState = 'paused';
			});

			// article에서 마우스가 떠나면 부모인 #circle의 animation-play-state 값을 다시 "running"으로 변경
			el.addEventListener('mouseleave', () => {
				circle.style.animationPlayState = 'running';
			});
		});

		// 컴포넌트가 언마운트될 때 이벤트 리스너 제거
		return () => {
			articles.forEach(el => {
				el.removeEventListener('mouseenter', () => {});
				el.removeEventListener('mouseleave', () => {});
			});
		};
	}, []); // 빈 배열을 넣어 컴포넌트가 마운트될 때만 실행되도록 함

	return (
		<div className='wrap'>
			<div className='textoverlay'>
				<Typewriter text='Discover the power of nature with AVALLION. Revitalize and illuminate your skin’s true beauty, restoring its natural radiance from within.' />
			</div>
			<video src='img/bg.mp4' loop autoPlay muted></video>

			<section id='circle'>
				<article className='face1'>
					<h1>Brand Partners</h1>
					<div className='inner'>
						<div>
							<p>
								<i className='fab fa-android'></i>
							</p>
							<h2>Android</h2>
						</div>
						<div>
							<p>
								<i className='fab fa-apple'></i>
							</p>
							<h2>Apple</h2>
						</div>
						<div>
							<p>
								<i className='fab fa-twitter-square'></i>
							</p>
							<h2>Twitter</h2>
						</div>
						<div>
							<p>
								<i className='fab fa-facebook-square'></i>
							</p>
							<h2>Facebook</h2>
						</div>
						<div>
							<p>
								<i className='fab fa-youtube'></i>
							</p>
							<h2>Youtube</h2>
						</div>
						<div>
							<p>
								<i className='fab fa-google-play'></i>
							</p>
							<h2>Google</h2>
						</div>
					</div>
				</article>

				<article className='face2'>
					<h1>What's New</h1>
					<div className='inner'>
						<div>
							<h2>News and Articles</h2>
							<img src='img/pattern.jpg' alt='Pattern' />
							<h3>What is AVALLION?</h3>
							<p>
								AVALLION offers a unique blend of natural ingredients designed to rejuvenate and nourish your skin.{' '}
								<br />
								<br />
								Discover the essence of beauty and wellness with our products, meticulously crafted to restore your
								skin's natural balance and glow.
							</p>
						</div>
					</div>
				</article>

				<article className='face3'>
					<h1>Our Community</h1>
					<div className='inner'>
						<div>
							<div className='pic'></div>
							<div className='con'>
								<h2>Member Spotlight 1</h2>
								<p>
									Highlighting our community members and their experiences with AVALLION products. Discover their
									journeys to radiant skin.
								</p>
								<span>2024-10-31</span>
							</div>
						</div>
						<div>
							<div className='pic'></div>
							<div className='con'>
								<h2>Member Spotlight 2</h2>
								<p>
									Join us as we share success stories from our users, showcasing the transformative effects of our
									skincare line.
								</p>
								<span>2024-10-30</span>
							</div>
						</div>
						<div>
							<div className='pic'></div>
							<div className='con'>
								<h2>Member Spotlight 3</h2>
								<p>
									Read testimonials from our loyal customers who have embraced the AVALLION lifestyle for healthy,
									glowing skin.
								</p>
								<span>2024-10-29</span>
							</div>
						</div>
					</div>
				</article>

				<article className='face4'>
					<h1>Promotions</h1>
					<div className='inner'>
						<div>
							<video src='img/intro.mp4' loop controls></video>
							<h2>Exclusive Offers</h2>
							<p>
								Discover our latest promotions and exclusive deals on AVALLION products. Treat yourself to the luxury of
								nature.
								<br />
								<br />
								Enjoy the benefits of our skincare line at special prices. Don't miss out!
							</p>
						</div>
						<div>
							<h2>Latest Updates</h2>
							<p>Stay tuned for exciting news and product launches!</p>
							<em>2024.10.31</em>
						</div>
					</div>
				</article>

				<article className='face5'>
					<h1>AVALLION</h1>
					<div className='inner'>
						<div>
							<img src='img/tit.png' alt='Title' />
							<div className='pic'></div>
							<img src='img/txt.png' alt='Text' />
							<img src='img/btn.png' alt='Button' />
							<img className='reflection' src='img/reflect.png' alt='Reflection' />
						</div>
					</div>
				</article>

				<article className='face6'>
					<h1>Our Services</h1>
					<div className='inner'>
						<div>
							<i className='fas fa-rss'></i>
							<div className='con'>
								<h2>Online Consultations</h2>
								<p>
									Get personalized skincare advice from our experts
									<br />
									Schedule a consultation today!
								</p>
							</div>
						</div>
						<div>
							<i className='fas fa-code'></i>
							<div className='con'>
								<h2>Technical Support</h2>
								<p>
									We’re here to assist you with any inquiries or issues
									<br />
									Reach out for immediate support.
								</p>
							</div>
						</div>
						<div>
							<i className='fas fa-envelope'></i>
							<div className='con'>
								<h2>Customer Service</h2>
								<p>
									Your satisfaction is our priority.
									<br />
									Contact us for any questions or feedback.
								</p>
							</div>
						</div>
						<div>
							<i className='fas fa-list'></i>
							<div className='con'>
								<h2>Contact Us</h2>
								<p>
									We’re always here to help you with any inquiries.
									<br />
									Don’t hesitate to reach out!
								</p>
							</div>
						</div>
					</div>
				</article>

				<article className='face7'>
					<h1>Promotion</h1>
					<div className='inner'>
						<div>
							<div>
								<video src='img/loop.mp4' loop autoPlay muted></video>
								<h2>
									Promote
									<br /> Your
									<br /> Beauty
								</h2>
								<img src='img/txt2.png' alt='Text 2' />
								<img src='img/line.png' alt='Line' />
							</div>
						</div>
					</div>
				</article>

				<article className='face8'>
					<h1>Weather Update</h1>
					<div className='inner'>
						<div>
							<h2>Current Weather</h2>
							<i className='fab fa-mixcloud'></i>
							<span>
								26<em>°C</em>
							</span>
						</div>
						<div>
							<i className='fas fa-sun'></i>
							<h3>Sunny</h3>
							<p>Afternoon forecast</p>
							<h4>
								23<b>°C</b>
							</h4>
						</div>
						<div>
							<i className='fas fa-bolt'></i>
							<h3>Thunderstorm</h3>
							<p>Evening forecast</p>
							<h4>
								18<b>°C</b>
							</h4>
						</div>
					</div>
				</article>
			</section>
		</div>
	);
}
