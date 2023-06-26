import { FC } from 'react'

import { ProductCard } from '@/components'

import styles from './Product.module.scss'

const Product: FC = () => {
	return (
		<section>
			<h1>Miner</h1>
			<div className={styles.products_wrapper}>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</section>
	)
}

export default Product
