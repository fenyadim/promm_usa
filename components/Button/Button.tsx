import cn from 'classnames'
import { ButtonHTMLAttributes, FC } from 'react'

import styles from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	styleType: 'fill' | 'border' | 'clear'
}

const Button: FC<IButton> = (props) => {
	const { styleType, children, ...rest } = props
	return (
		<button
			className={cn(styles.btn, {
				[styles.fill]: styleType === 'fill',
				[styles.clear]: styleType === 'clear',
			})}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
