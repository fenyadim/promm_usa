'use client'

import Image from 'next/image'
import { FC, Fragment, PropsWithChildren } from 'react'
import { Navigation } from 'swiper'
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
	return (
		<Swiper
			modules={[Navigation]}
			spaceBetween={10}
			slidesPerView={3}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
			navigation
			loop={true}
		>
			{data.map(({ name, srcImg, place }) => (
				<Fragment key={name}>
					<SwiperSlide>
						<div className={styles.slide}>
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
						</div>
					</SwiperSlide>
				</Fragment>
			))}
		</Swiper>
	)
}

export default ImagesSlider
