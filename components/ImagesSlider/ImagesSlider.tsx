'use client'

import cn from 'classnames'
import Image from 'next/image'
import { FC, Fragment, useRef } from 'react'
import { Navigation, Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './ImagesSlider.module.scss'

interface IImagesSlider {
	data: Array<PeopleType>
}

type PeopleType = {
	srcImg: string
	name: string
	place: string
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
				{data.map(({ name, srcImg, place }, id) => (
					<Fragment key={`${name} ${id}`}>
						<SwiperSlide className={styles.slide}>
							<Image
								src={srcImg}
								alt={name}
								fill
								style={{ objectFit: 'cover' }}
							/>
							<div className={styles.slide_info}>
								<h4>{name}</h4>
								<p>{place}</p>
							</div>
						</SwiperSlide>
					</Fragment>
				))}
			</Swiper>
			<div className={styles.navigation}>
				<button
					onClick={() => swiperRef.current?.slidePrev()}
					className={cn(styles.prev_btn, styles.btn)}
				/>
				<button
					onClick={() => swiperRef.current?.slideNext()}
					className={cn(styles.next_btn, styles.btn)}
				/>
			</div>
		</div>
	)
}

export default ImagesSlider
