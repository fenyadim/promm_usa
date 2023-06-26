import Image from 'next/image'
import { ButtonHTMLAttributes, forwardRef } from 'react'

import styles from './ImageBtn.module.scss'

type IImageBtn = {
	title?: string
	src: string
	size?: number
} & ButtonHTMLAttributes<HTMLButtonElement>

type Ref = HTMLButtonElement

const ImageBtn = forwardRef<Ref, IImageBtn>((props, ref) => {
	const { title, src, size = 25 } = props

	return (
		<button ref={ref} className={styles.btn_wrapper} {...props}>
			<Image src={src} alt="" width={size} height={size} />
			{title && title}
		</button>
	)
})

ImageBtn.displayName = 'ImageBtn'

export default ImageBtn
