import Image from 'next/image'
import { FC } from 'react'

import styles from './ProductCard.module.scss'

const ProductCard: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.image}>
				<Image
					src="/image/products/m30s.jpg"
					alt="Whatsminer M30S++"
					fill
					style={{ objectFit: 'contain' }}
				/>
			</div>
			<div>
				<p>116 200 ₽</p>
				<h3>Asic майнер Whatsminer M30S++ 112TH/s</h3>
				<div>
					<p>Хэшрейт — 112 TH/s</p>
					<p>Алгоритм — SHA-256</p>
					<p>Добываемые монеты — BTC/BCH</p>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
