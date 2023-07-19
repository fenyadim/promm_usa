'use client'

import Image from 'next/image'
import { FC } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import { useAppDispatch } from '@/redux/hooks'
import { addInBasket, removeInBasket } from '@/redux/slices/basketSlice'

import { numberWithSpaces } from '@/utils/numberWithSpaces'

import { ProductType } from '@/types/product.type'

import styles from './BasketItem.module.scss'

type Item = {
	count: number
} & ProductType

interface IBasketItem {
	item: Item
}

const BasketItem: FC<IBasketItem> = ({ item }) => {
	const { src, title, price, count } = item

	const dispatch = useAppDispatch()

	return (
		<div className={styles.wrapper}>
			<div className={styles.image}>
				<Image src={src} alt={title} fill style={{ objectFit: 'contain' }} />
			</div>
			<div className={styles.info}>
				<h2>{title}</h2>
				<h3>{`$ ${numberWithSpaces(
					price
				)} + ${count} pcs. = $ ${numberWithSpaces(price * count)}`}</h3>
			</div>
			<div className={styles.nav}>
				<button onClick={() => dispatch(addInBasket(item))}>
					<AiOutlinePlus size={20} />
				</button>
				<p>{count} pcs.</p>
				<button onClick={() => dispatch(removeInBasket(item))}>
					<AiOutlineMinus size={20} />
				</button>
			</div>
		</div>
	)
}

export default BasketItem
