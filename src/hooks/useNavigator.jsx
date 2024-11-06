import { useNavigator } from 'react-router-dom';

// imformation - Product videos - youtube
export default function ButtonPath() {
	const navigator = useNavigator();

	// 버튼 정보 배열
	const buttons = [
		{ label: 'Information', path: '/product' },
		{ label: 'Watch', path: '/youtube' }
	];

	return (
		<div className='buttons'>
			{/* 버튼 생성 */}
			{buttons.map((button, index) => (
				<button key={index} onClick={() => navigator(button.path)}>
					{button.label}
				</button>
			))}
		</div>
	);
}
