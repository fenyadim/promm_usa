'use client'

import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { FC, Fragment, useEffect, useState } from 'react'
import { BiFilterAlt } from 'react-icons/bi'

import { Menu, ProductCard, Select } from '@/components'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
	fetchAll,
	filterByBrands,
	filterByHash,
	filterByPrice,
} from '@/redux/slices/productSlice'

import { toggleVisible } from '@/utils/toggleVisible'

import styles from './Product.module.scss'

const brands = [
	{
		src: '/image/miners/Bitmain.jpg',
		title: 'Bitmain',
	},
	{
		src: '/image/miners/Whatsminer.jpg',
		title: 'Whatsminer',
	},
	{
		src: '/image/miners/Canaan.png',
		title: 'Canaan',
	},
	{
		src: '/image/miners/Goldshell.png',
		title: 'Goldshell',
	},
	{
		src: '/image/miners/iPollo.png',
		title: 'iPollo',
	},
]

type SortVars = 'Ascending' | 'Descending'

const pathTitle: { [title: string]: string } = {
	'/product/asic-miners': 'Miner',
	'/product/containers': 'Mining containers',
	'/product/business': 'Ready-made business',
}

const Product: FC = () => {
	const [sortPrice, setSortPrice] = useState<SortVars>('Ascending')
	const [sortHash, setSortHash] = useState<SortVars>('Ascending')
	const [showMenu, setShowMenu] = useState<boolean>(false)
	const products = useAppSelector((state) => state.productReducer)
	const dispatch = useAppDispatch()

	const path = usePathname()
	const searchParams = useSearchParams()
	const brandFind = searchParams.get('brand')

	const toggleMenu = toggleVisible(setShowMenu, showMenu)

	useEffect(() => {
		if (brandFind === null) dispatch(fetchAll())
		else dispatch(filterByBrands(brandFind))
	}, [brandFind])

	useEffect(() => {
		dispatch(filterByPrice(sortPrice))
	}, [sortPrice])

	useEffect(() => {
		dispatch(filterByHash(sortHash))
	}, [sortHash])

	return (
		<>
			<section className={styles.wrapper}>
				<h1>{pathTitle[path]}</h1>
				{path === '/product/asic-miners' && (
					<div className={styles.brand_links}>
						{brands.map(({ src, title }) => (
							<Link
								key={title}
								href={
									title !== brandFind
										? `/product/asic-miners?brand=${title}`
										: '/product/asic-miners'
								}
								className={cn(styles.brand_item, {
									[styles.selected]: brandFind === title,
								})}
							>
								<div className={styles.brand_image}>
									<Image
										src={src}
										alt={title}
										fill
										style={{ objectFit: 'contain' }}
									/>
								</div>
								{title}
							</Link>
						))}
					</div>
				)}
				<div className={styles.layout}>
					<div className={styles.fliter_wrapper}>
						<Select
							title="Price"
							currentVar={sortPrice}
							setCurrent={setSortPrice}
						/>
						<Select
							title="Hashrate"
							currentVar={sortHash}
							setCurrent={setSortHash}
						/>
						<button className={styles.filter_btn} onClick={toggleMenu}>
							<BiFilterAlt size={20} />
							Filter
						</button>
					</div>
					<div className={styles.products_wrapper}>
						{products.map((items, id) => (
							<Fragment key={id}>
								<ProductCard items={items} />
							</Fragment>
						))}
					</div>
				</div>
			</section>
			<Menu showMenu={showMenu} toggleMenu={toggleMenu} position="left">
				<div>
					<Select
						title="Price"
						currentVar={sortPrice}
						setCurrent={setSortPrice}
					/>
					<Select
						title="Hashrate"
						currentVar={sortHash}
						setCurrent={setSortHash}
					/>
				</div>
			</Menu>
		</>
	)
}

export default Product
