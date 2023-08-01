'use client'

import { useRouter } from 'next-nprogress-bar'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

import { Button, Loader } from '@/components'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { clear } from '@/redux/slices/basketSlice'

import { numberWithSpaces } from '@/utils/numberWithSpaces'

import { IFormValues } from '@/types/form.type'

import styles from './Payment.module.scss'

const Payment: FC = () => {
	const [isLoading, setIsLoading] = useState(true)
	const router = useRouter()
	const formData = useAppSelector((state) => state.formData)
	const basketItems = useAppSelector((state) => state.basket)
	const dispatch = useAppDispatch()

	const { amount } = formData as IFormValues & { amount: number }

	useEffect(() => {
		if (Object.keys(formData).length === 0 || basketItems.length === 0)
			router.replace('/basket')
		setTimeout(() => {
			setIsLoading(false)
		}, 5000)
	}, [basketItems.length])

	if (Object.keys(formData).length === 0 || basketItems.length === 0)
		return <div></div>

	if (isLoading)
		return (
			<div className={styles.wrapper}>
				<Loader />
			</div>
		)

	return (
		<div className={styles.wrapper}>
			<div className={styles.block}>
				<h2>Pay For Your Order</h2>
				<Image
					src="/image/merchant/qr.jpg"
					alt="QR Code"
					width={200}
					height={200}
				/>
				<div>
					<h3>Amount</h3>
					<p>{numberWithSpaces(amount)} USDT</p>
				</div>
				<div>
					<h3>Address</h3>
					<p>TXQEc6PLb8KkzUTqbvcY1fXmBywhqrFzBB</p>
				</div>
				<p style={{ color: '#ff6060' }}>
					After you have transferred the amount, click on the "I paid" button.
				</p>
				<Button styleType="fill" onClick={() => dispatch(clear())}>
					I paid
				</Button>
			</div>
		</div>
	)
}

export default Payment
