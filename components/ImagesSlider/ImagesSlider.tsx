'use client'

import cn from 'classnames'
import Image from 'next/image'
import { FC, useRef } from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import { Navigation, Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './ImagesSlider.module.scss'

interface IImagesSlider {
	data: Array<PeopleType>
}

type PeopleType = {
	srcImg: string
}

const ImagesSlider: FC<IImagesSlider> = ({ data }) => {
	const swiperRef = useRef<SwiperType>()

	return (
		<div className={styles.slider_wrapper}>
			<Swiper
				modules={[Navigation]}
				spaceBetween={50}
				slidesPerView={'auto'}
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper
				}}
			>
				{data.map(({ srcImg }, id) => (
					<SwiperSlide key={id} className={styles.slide}>
						<Image
							src={srcImg}
							alt={srcImg}
							fill
							style={{ objectFit: 'cover' }}
						/>
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
	)
}

export default ImagesSlider
