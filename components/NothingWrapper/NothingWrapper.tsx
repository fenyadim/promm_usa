import { FC, PropsWithChildren } from 'react'

import styles from './NothingWrapper.module.scss'

interface INothingWrapper extends PropsWithChildren {
	visible: boolean
}

const NothingWrapper: FC<INothingWrapper> = ({ visible, children }) => {
	return (
		<>
			{!visible ? (
				children
			) : (
				<div className={styles.nothing_wrapper}>
					<h3>There's nothing here</h3>
				</div>
			)}
		</>
	)
}

export default NothingWrapper
