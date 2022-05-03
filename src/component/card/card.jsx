import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './card.module.css';

const Card = ({ product }) => {
	const navigate = useNavigate();

	const goToDetail = () => {
		navigate(`/detail/${product.id}`);
	};
	return (
		<div className={styles.card} onClick={goToDetail}>
			<img src={product?.img} alt='product' className={styles.img} />
			<p className={styles.title}>{product?.title}</p>
			<div className={styles.desc}>
				<p className={styles.new}>{product?.new === true ? '신제품' : ''}</p>
				<p className={styles.price}>{product?.price}</p>
			</div>
		</div>
	);
};

export default Card;
