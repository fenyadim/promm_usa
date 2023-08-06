'use client'

import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { AiFillStar, AiOutlineDelete, AiOutlineStar } from 'react-icons/ai'

import { AvailableItem, Characteristic } from '@/components'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { addInBasket, deleteItem } from '@/redux/slices/basketSlice'
import { addItem, removeItem } from '@/redux/slices/favoritesSlice'

import { numberWithSpaces } from '@/utils/numberWithSpaces'

import { CatalogType, ProductType } from '@/types/product.type'

import styles from './ProductCard.module.scss'

interface IProductCard {
	items: ProductType
	type: CatalogType
}

const ProductCard: FC<IProductCard> = ({ items, type }) => {
	const { slug, src, title, price, availableCount, status } = items
	const favorites = useAppSelector((state) => state.favorites)
	const basket = useAppSelector((state) => state.basket)
	const dispatch = useAppDispatch()
	const isCheckedFavorite = favorites.find((item) => item.slug === slug)
	const isCheckedBasket = basket.find((item) => item.slug === slug)

	const clickFavoritesBtn = () => {
		if (!isCheckedFavorite) {
			dispatch(addItem(items))
		} else {
			dispatch(removeItem(items))
		}
	}

	return (
		<div className={styles.wrapper}>
			{status && (
				<div className={styles.status_wrapper}>
					{status.map((nameStatus) => (
						<span
							key={nameStatus}
							className={cn(styles.status, {
								[styles.status_hit]: nameStatus === 'hit',
								[styles.status_new]: nameStatus === 'new',
							})}
						>
							{nameStatus}
						</span>
					))}
				</div>
			)}
			<div className={styles.image}>
				<Link href={`/product/${slug}?type=${type}`}>
					<Image src={src} alt={title} fill style={{ objectFit: 'contain' }} />
				</Link>
			</div>
			<div className={styles.info}>
				<p className={styles.price}>$ {numberWithSpaces(price)}</p>
				<Link href={`/product/${slug}?type=${type}`}>{title}</Link>
				<AvailableItem count={availableCount} />
				<Characteristic type={type} item={items} />
			</div>
			<div className={styles.navigation}>
				<button
					className={cn(styles.order_btn, {
						[styles.in_basket]: isCheckedBasket,
					})}
					onClick={() => dispatch(addInBasket(items))}
				>
					{isCheckedBasket ? 'In Basket' : 'Order'}
				</button>

				{isCheckedBasket && (
					<button
						className={styles.delete_btn}
						onClick={() => dispatch(deleteItem(items))}
					>
						<AiOutlineDelete size={26} />
					</button>
				)}

				<button onClick={clickFavoritesBtn} className={styles.favorite_btn}>
					{isCheckedFavorite ? (
						<AiFillStar size={26} color="#5820f6" />
					) : (
						<AiOutlineStar size={26} />
					)}
				</button>
			</div>
		</div>
	)
}

export default ProductCard
