'use client'

import Image from 'next/image'
import { FC, Fragment, useRef } from 'react'
import { Navigation, Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { NavigationOptions } from 'swiper/types'

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
	// const btnRef = useRef(null)
	const swiperRef = useRef<SwiperType>()
	// const navigation: NavigationOptions = {
	// 	enabled: true,
	// 	//@ts-ignore
	// 	nextEl: btnRef.current,
	// }
	return (
		<div className={styles.slider_wrapper}>
			<Swiper
				modules={[Navigation]}
				spaceBetween={50}
				slidesPerView={'auto'}
				// navigation={navigation}
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper
				}}
			>
				{data.map(({ name, srcImg, place }) => (
					<Fragment key={name}>
						<SwiperSlide className={styles.slide}>
							{/* <div className={styles.slide}> */}
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
							{/* </div> */}
						</SwiperSlide>
					</Fragment>
				))}
			</Swiper>
			<button
				onClick={() => swiperRef.current?.slideNext()}
				className={styles.next_btn}
			/>
			<button
				onClick={() => swiperRef.current?.slidePrev()}
				className={styles.next_btn}
			/>
		</div>
	)
}

export default ImagesSlider
