import Image from 'next/image'
import { FC } from 'react'

import styles from './ContactItem.module.scss'

interface IContactItem {
	imgSrc: string
	title: string
	address: string
	phone?: string
	mail?: string
}

const ContactItem: FC<IContactItem> = ({
	imgSrc,
	title,
	address,
	mail,
	phone,
}) => {
	return (
		<div className={styles.wrapper}>
			<Image src={imgSrc} alt={title} width={205} height={128} />
			<div className={styles.info}>
				<h3>{title}</h3>
				<div className={styles.address}>
					<p>{address}</p>
				</div>
				{mail && (
					<div className={styles.mail}>
						<p>{mail}</p>
					</div>
				)}
				{phone && (
					<div className={styles.phone}>
						<p>{phone}</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default ContactItem
