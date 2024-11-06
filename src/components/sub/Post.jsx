import Layout from '../common/Layout'; 
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Post() {
	const [Posts, setPosts] = useState([]);
	const [SearchText, setSearchText] = useState('');
	const [Category, setCategory] = useState('');
	console.log(Posts);

	const fetchAllPosts = () => {
		//https://post-1htn.onrender.com/
		//http://localhost:8000/
		axios.get('https://post-1htn.onrender.com/posts/').then(res => {
			console.log(res.data);
			setPosts(res.data);
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		setSearchText(e.target[0].value);
	};

	const FilteredPosts =
		Category === 'BUSINESS'
			? Posts.filter(post => post.category == 'BUSINESS')
			: Category === 'PERSONAL'
			? Posts.filter(post => post.category == 'PERSONAL')
			: Category === 'IMPORTANT'
			? Posts.filter(post => post.category == 'IMPORTANT')
			: Posts;

	useEffect(() => {
		fetchAllPosts();
	}, []);

	useEffect(() => {
		if (!SearchText) return;
		axios
		//https://post-1htn.onrender.com/
		//http://localhost:8000/
			.get(`https://post-1htn.onrender.com/posts-search/?search=${SearchText}`)
			.then(res => {
				console.log(res.data);
				setPosts(res.data);
			})
			.catch(err => console.log(err.message));
	}, [SearchText]);

	return (
		<Layout title='Post'>
			<article className='controll'>
				{/* 게시글 검색 폼 */}
				<form className='searchBox' onSubmit={handleSubmit}>
					<input type='text' />
					<button>Search</button>
				</form>

				{/* 글 카테고리별 필터링 드롭다운 메뉴 */}
				<select onChange={e => setCategory(e.target.value)}>
					<option value=''>All POSTS</option>
					<option value='BUSINESS'>Business</option>
					<option value='PERSONAL'>Personal</option>
					<option value='IMPORTANT'>Important</option>
				</select>
				<br />

				{/* 글 작성 버튼 */}
				<button>
					<Link to='/post-add'>Write Post</Link>
				</button>
			</article>

			<table>
				<thead>
					<tr>
						<th width='20%'>No</th>
						<th>Title</th>
						<th width='30%'>date</th>
					</tr>
				</thead>
				<tbody>
					{FilteredPosts?.map((post, idx) => (
						<tr key={post.id}>
							<td>{FilteredPosts.length - idx}</td>
							<td>
								<Link to={`/post/${post.slug}`}>{post.title}</Link>
							</td>
							<td>
								{post.created.split('.')[0] === post.updated.split('.')[0] ? (
									<span>created at : {post.created.split('T')[0]}</span>
								) : (
									<span>updated at : {post.updated.split('T')[0]}</span>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Layout>
	);
}