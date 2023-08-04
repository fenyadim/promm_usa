import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'

import styles from './RadioBtn.module.scss'
import { IRadio } from './radio.interface'

const RadioBtn: FC<IRadio> = ({
	checked,
	value,
	srcImg,
	text,
	register,
	...props
}) => {
	return (
		<label
			className={cn(styles.radio_btn, {
				[styles.checked]: checked,
			})}
		>
			<Image src={srcImg} alt={value as string} width={30} height={30} />
			<input type="radio" value={value} {...register} {...props} />
			{text}
		</label>
	)
}

export default RadioBtn
