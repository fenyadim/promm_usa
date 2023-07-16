'use client'

import { useRouter } from 'next/navigation'
import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react'

import styles from './ImageBtn.module.scss'

type IImageBtn = {
	title?: string
	svg?: ReactNode
	link?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

type Ref = HTMLButtonElement

const ImageBtn = forwardRef<Ref, IImageBtn>((props, ref) => {
	const { title, svg, link } = props
	const router = useRouter()

	return (
		<button
			ref={ref}
			className={styles.btn_wrapper}
			onClick={() => link && router.push(link)}
			{...props}
		>
			{svg}
			{title && title}
		</button>
	)
})

ImageBtn.displayName = 'ImageBtn'

export default ImageBtn
