'use client'

import cn from 'classnames'
import { useRouter } from 'next-nprogress-bar'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

import { Button, Loader } from '@/components'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { clear } from '@/redux/slices/basketSlice'

import { useCountdown } from '@/hooks/useCountdown'

import { numberWithSpaces } from '@/utils/numberWithSpaces'

import { IFormValues } from '@/types/form.type'

import styles from './Payment.module.scss'

type FormType = {
	amount: number
	time: number
} & IFormValues

const Payment: FC = () => {
	const [isLoading, setIsLoading] = useState(true)
	// const [] = useCountdown('13:47:')
	const router = useRouter()
	const formData = useAppSelector((state) => state.formData)
	const basketItems = useAppSelector((state) => state.basket)
	const [minutes, setMinutes] = useState(0)
	const [seconds, setSeconds] = useState<number | string>(0)
	const dispatch = useAppDispatch()

	const { amount, time } = formData as FormType

	const future = new Date(time).getTime() + 30 * 60000

	console.log()
	console.log()

	useEffect(() => {
		let timer = setInterval(() => {
			const min = new Date(future - Date.now()).getMinutes()
			const sec = new Date(future - Date.now()).getSeconds()
			setMinutes(min)
			setSeconds(sec > 9 ? sec : '0' + sec)
			if (min === 0 && sec === 0) router.replace('/basket')
		}, 1000)
		return () => {
			clearInterval(timer)
		}
	}, [])

	// const [minutes, seconds] = useCountdown(time)

	// console.log(minutes, seconds)

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
					<h3>Currency</h3>
					<button className={cn(styles.currency_btn, styles.active)}>
						<Image
							src="/image/crypto/tether-seeklogo.com.svg"
							alt="USDT"
							width={20}
							height={20}
						/>
						USDT <span>TRC20</span>
					</button>
				</div>
				<div>
					<h3>Amount</h3>
					<p>{amount} USDT</p>
				</div>
				<div>
					<h3>Address</h3>
					<p>TXQEc6PLb8KkzUTqbvcY1fXmBywhqrFzBB</p>
				</div>
				<p style={{ color: '#ff6060' }}>
					After you have transferred the amount, click on the "I have
					transferred" button.
				</p>
				<div className={styles.nav}>
					<Button styleType="fill" onClick={() => dispatch(clear())}>
						I have transferred
					</Button>
					<p>
						{minutes}:{seconds}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Payment
