import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import useCombineText from '../../hooks/useCombineText';
import Content from '../common/Content';

export default function YoutubeDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [YoutubeVid, setYoutubeVid] = useState(null);
	const combineText = useCombineText();

	useEffect(() => {
		const api_key = import.meta.env.VITE_YOUTUBE_API;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&id=${id}`;

		fetch(url)
			.then(data => data.json())
			.then(json => {
				setYoutubeVid(json.items[0]);
			});
	}, [id]);


	// 화면을 클릭하면 이전 페이지로 이동하는 함수
	const handleBackgroundClick = () => {
		navigate(-1); // -1을 사용하여 이전 페이지로 이동
	};


	return (
		<div onClick={handleBackgroundClick} className='container' style={{ width: '100%', height: '150vh', cursor: 'pointer' }}>
			<Layout title={YoutubeVid?.snippet.title}>
 
			<Content delay={1}>
				<figure className='vidFrame'>
					<iframe width='100%' height='100%' title='youtube' src={`https://www.youtube.com/embed/${YoutubeVid?.snippet.resourceId.videoId}`}></iframe>
				</figure>

				<p>{YoutubeVid?.snippet.description}</p>
				<span className='date'>{combineText(YoutubeVid?.snippet.publishedAt.split('T')[0], '-', '.')}</span>
			</Content>
		</Layout>
		</div>
	);
}