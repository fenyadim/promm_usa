import Link from 'next/link'
import { FC } from 'react'

import styles from './LinkBtn.module.scss'

interface ILinkBtn {
	title: string
	href?: string
}

const LinkBtn: FC<ILinkBtn> = ({ title, href }) => {
	return (
		<Link className={styles.link_btn} href={href ? href : ''}>
			{title}
		</Link>
	)
}

export default LinkBtn
