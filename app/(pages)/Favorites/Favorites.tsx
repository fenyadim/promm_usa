'use client'

import { FC, Fragment } from 'react'

import { NothingWrapper, ProductCard } from '@/components'

import { useAppSelector } from '@/redux/hooks'

import { fetchType } from '@/utils/fetchType'

import styles from './Favorites.module.scss'

const Favorites: FC = () => {
	const favorites = useAppSelector((state) => state.favorites)

	return (
		<section className={styles.wrapper}>
			<h1>Favorites</h1>
			<div
				className={styles.products_container}
				style={
					favorites.length !== 0 ? { display: 'grid' } : { display: 'block' }
				}
			>
				<NothingWrapper visible={favorites.length === 0}>
					{favorites.map((item) => (
						<Fragment key={item.slug}>
							<ProductCard items={item} type={fetchType(item)} />
						</Fragment>
					))}
				</NothingWrapper>
			</div>
		</section>
	)
}

export default Favorites
