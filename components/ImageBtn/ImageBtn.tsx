import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react'

import styles from './ImageBtn.module.scss'

type IImageBtn = {
	title?: string
	svg?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

type Ref = HTMLButtonElement

const ImageBtn = forwardRef<Ref, IImageBtn>((props, ref) => {
	const { title, svg } = props

	return (
		<button ref={ref} className={styles.btn_wrapper} {...props}>
			{svg}
			{title && title}
		</button>
	)
})

ImageBtn.displayName = 'ImageBtn'

export default ImageBtn
