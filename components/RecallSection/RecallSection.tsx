import { FC, Fragment } from 'react'

import { ImagesSlider, RecallItem } from '@/components'

import { recallData } from '@/api/recallData'

import styles from './RecallSection.module.scss'

const RecallSection: FC = () => {
	return (
		<section>
			<div className={styles.wrapper}>
				<h2>Recall</h2>
				<div className={styles.recall_blocks}>
					{recallData.map((items, id) => (
						<Fragment key={id}>
							<RecallItem items={items} />
						</Fragment>
					))}
				</div>
			</div>
		</section>
	)
}

export default RecallSection
