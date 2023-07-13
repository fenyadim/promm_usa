'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { FC } from 'react'
import { GoTriangleRight } from 'react-icons/go'

import { AvailableItem, Characteristic } from '@/components'

import { useAppSelector } from '@/redux/hooks'

import { numberWithSpaces } from '@/utils/numberWithSpaces'

import { CatalogType } from '@/types/product.type'

import styles from './Product.module.scss'

const Product: FC = () => {
	const state = useAppSelector((state) => state.productReducer)

	const path = usePathname()
	const searchParams = useSearchParams()
	const typeFind = searchParams.get('type')

	const items = state[typeFind as string].filter(
		({ slug }) => slug === path.split('/product/')[1]
	)[0]

	const { brand, title, src, price, availableCount } = items

	return (
		<section className={styles.wrapper}>
			<div className={styles.breadcrumbs}>
				{brand && (
					<>
						<Link href={`catalog/asic-miners?brand=${brand}`}>{brand}</Link>
						<GoTriangleRight />
					</>
				)}
				<p>{title}</p>
			</div>
			<div className={styles.product_wrapper}>
				<div className={styles.image}>
					<Image src={src} alt={title} fill style={{ objectFit: 'contain' }} />
				</div>
				<div className={styles.product_info}>
					<h2>{title}</h2>
					<div className={styles.info_block}>
						<div className={styles.characteristic}>
							<h4>Characteristics:</h4>
							<Characteristic type={typeFind as CatalogType} item={items} />
						</div>
						<div className={styles.order}>
							<div className={styles.price_block}>
								<h3>$ {numberWithSpaces(price)}</h3>
								<AvailableItem count={availableCount} />
							</div>
							<button>Order</button>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.tabs}></div>
		</section>
	)
}

export default Product
