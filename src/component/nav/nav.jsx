import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useRef } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styles from './nav.module.css';

const Nav = ({ authenticate, setAuthenticate }) => {
	const categories = [
		'여성',
		'Divided',
		'남성',
		'신생아/유아',
		'아동',
		'H&M Home',
		'Sale',
		'Sustainable',
	];

	const navigate = useNavigate();

	const goToMain = () => {
		navigate('/');
	};

	const inputRef = useRef();
	let [searchParams, setSearchParams] = useSearchParams();

	const onSearch = (e) => {
		if (e.code === 'Enter') {
			e.preventDefault();
			let params = inputRef.current.value;
			navigate(`/?q=${params}`);
		} else {
			return;
		}
	};

	return (
		<div className={styles.nav}>
			{authenticate ? (
				<div className={styles.login} onClick={() => setAuthenticate(false)}>
					<FontAwesomeIcon icon={faUser} />
					<span>로그아웃</span>
				</div>
			) : (
				<div className={styles.login} onClick={() => navigate('/login')}>
					<FontAwesomeIcon icon={faUser} />
					<span>로그인</span>
				</div>
			)}

			<div className={styles.logo}>
				<img
					className={styles.img}
					src='data:image/png;base64,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'
					alt='logo'
					onClick={goToMain}
				/>
			</div>

			<div className={styles.category}>
				<div className={styles.lists}>
					<ul className={styles.ul}>
						{categories.map((category, index) => (
							<li className={styles.li} key={index}>
								{category}
							</li>
						))}
					</ul>
				</div>
				<div className={styles.search}>
					<form className={styles.form}>
						<FontAwesomeIcon icon={faSearch} />
						<input
							className={styles.input}
							type='text'
							placeholder='Search'
							onKeyPress={(e) => onSearch(e)}
							ref={inputRef}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Nav;
