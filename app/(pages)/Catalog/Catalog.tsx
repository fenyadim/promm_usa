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

import styles from './Catalog.module.scss'

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

const slugInNameArr: { [slug: string]: 'miners' | 'containers' | 'business' } =
	{
		'/catalog/asic-miners': 'miners',
		'/catalog/containers': 'containers',
		'/catalog/business': 'business',
	}

type SortVars = 'Ascending' | 'Descending'

const pathTitle: { [title: string]: string } = {
	'/catalog/asic-miners': 'Miner',
	'/catalog/containers': 'Mining containers',
	'/catalog/business': 'Ready-made business',
}

const Catalog: FC = () => {
	const [sortPrice, setSortPrice] = useState<SortVars>('Ascending')
	const [sortHash, setSortHash] = useState<SortVars>('Ascending')
	const [showMenu, setShowMenu] = useState<boolean>(false)
	const products = useAppSelector((state) => state.product)
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
		dispatch(
			filterByPrice({
				sortType: sortPrice,
				slug: slugInNameArr[path],
			})
		)
	}, [sortPrice])

	useEffect(() => {
		dispatch(filterByHash(sortHash))
	}, [sortHash])

	return (
		<>
			<section className={styles.wrapper}>
				<h1>{pathTitle[path]}</h1>
				{path === '/catalog/asic-miners' && (
					<div className={styles.brand_links}>
						{brands.map(({ src, title }) => (
							<Link
								key={title}
								href={
									title !== brandFind
										? `/catalog/asic-miners?brand=${title}`
										: '/catalog/asic-miners'
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
						{path === '/catalog/asic-miners' && (
							<Select
								title="Hashrate"
								currentVar={sortHash}
								setCurrent={setSortHash}
							/>
						)}
						<button className={styles.filter_btn} onClick={toggleMenu}>
							<BiFilterAlt size={20} />
							Filter
						</button>
					</div>
					<div className={styles.products_wrapper}>
						{products[slugInNameArr[path]].map((item, id) => (
							<Fragment key={id}>
								<ProductCard items={item} type={slugInNameArr[path]} />
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
					{path === '/catalog/asic-miners' && (
						<Select
							title="Hashrate"
							currentVar={sortHash}
							setCurrent={setSortHash}
						/>
					)}
				</div>
			</Menu>
		</>
	)
}

export default Catalog
