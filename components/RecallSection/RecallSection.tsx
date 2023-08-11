'use client'

import cn from 'classnames'
import { FC, Fragment, useRef } from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import { Navigation, Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ImagesSlider, RecallItem } from '@/components'

import { recallData } from '@/api/recallData'

import styles from './RecallSection.module.scss'

const RecallSection: FC = () => {
	const swiperRef = useRef<SwiperType>()

	return (
		<section>
			<div className={styles.wrapper}>
				<h2>Recall</h2>
				{/* <div className={styles.recall_blocks}>
					{recallData.map((items, id) => (
						<Fragment key={id}>
							<RecallItem items={items} />
						</Fragment>
					))}
				</div> */}
				<div className={styles.slider_wrapper}>
					<Swiper
						modules={[Navigation]}
						spaceBetween={50}
						slidesPerView={'auto'}
						onBeforeInit={(swiper) => {
							swiperRef.current = swiper
						}}
					>
						{recallData.map((item, id) => (
							<SwiperSlide key={id} className={styles.slide}>
								<RecallItem items={item} />
							</SwiperSlide>
						))}
					</Swiper>
					<div className={styles.navigation}>
						<button
							onClick={() => swiperRef.current?.slidePrev()}
							className={cn(styles.prev_btn, styles.btn)}
						>
							<BsArrowLeftCircle size={36} />
						</button>
						<button
							onClick={() => swiperRef.current?.slideNext()}
							className={cn(styles.next_btn, styles.btn)}
						>
							<BsArrowRightCircle size={36} />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default RecallSection
