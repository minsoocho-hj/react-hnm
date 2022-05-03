import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.module.css';
import All from './component/all/all';
import Login from './component/login/login';
import Nav from './component/nav/nav';
import PrivateRoute from './route/privateRoute';

// 1. 전체상품페이지, 로그인페이지, 상품디테일 페이지
// 2. 전체상품페이지는 홈페이지. 전체 상품 볼 수 있다.
// 3. 로그인 버튼 누르면, 로그인페이지
// 4. 상품디테일 클릭시 로그인 되어있으면, 상품디테일 볼 수 있다.
// 5. 로그아웃이되면 상품 디테일 볼 수 없다.
// 6. 로그아웃클릭시 전체상품페이지로 이동한다 ( 로그인 버튼으로 변경된다. )
//7. 상품을 검색할 수 있다.
function App() {
	const [authenticate, setAuthenticate] = useState(false);

	return (
		<div className='App'>
			<Nav authenticate={authenticate} setAuthenticate={setAuthenticate} />
			<Routes>
				<Route path='/' element={<All />} />
				<Route
					path='detail/:id'
					element={<PrivateRoute authenticate={authenticate} />}
				/>
				<Route
					path='login'
					element={<Login setAuthenticate={setAuthenticate} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
