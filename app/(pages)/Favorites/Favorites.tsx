'use client'

import { FC, Fragment } from 'react'

import { ProductCard } from '@/components'

import { useAppSelector } from '@/redux/hooks'

import { CatalogType, ProductType } from '@/types/product.type'

import styles from './Favorites.module.scss'

const Favorites: FC = () => {
	const favorites = useAppSelector((state) => state.favorites)

	const fetchType = (item: ProductType): CatalogType => {
		if (item.power) {
			return 'containers'
		} else if (item.income) {
			return 'business'
		} else {
			return 'miners'
		}
	}

	return (
		<section className={styles.wrapper}>
			<h1>Favorites</h1>
			<div
				className={styles.products_container}
				style={
					favorites.length !== 0 ? { display: 'flex' } : { display: 'block' }
				}
			>
				{favorites.length !== 0 ? (
					favorites.map((item) => (
						<Fragment key={item.slug}>
							<ProductCard items={item} type={fetchType(item)} />
						</Fragment>
					))
				) : (
					<div className={styles.nothing_wrapper}>
						<h3>There's nothing here</h3>
					</div>
				)}
			</div>
		</section>
	)
}

export default Favorites
