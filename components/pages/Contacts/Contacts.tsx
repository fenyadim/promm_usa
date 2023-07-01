'use client'

import { FC, Fragment, useEffect, useState } from 'react'
import {
	Map,
	Placemark,
	PlacemarkGeometry,
	YMaps,
	ZoomControl,
} from 'react-yandex-maps'

import { ContactItem } from '@/components'

import styles from './Contacts.module.scss'

type ContactType = {
	id: number
	data: {
		src: string
		title: string
		address: string
		mail?: string
		phone?: string
	}
	options?: {
		selectOnClick: boolean
	}
	coords?: PlacemarkGeometry
}

const contactInfo: Array<ContactType> = [
	{
		id: 1,
		data: {
			src: '/image/contacts/Moskva.jpg',
			title: 'Moscow office',
			address: 'Moscow, Lyotnaya st., 99 st3, office 4',
			mail: 'info@promminer.ru',
			phone: '8 (800) 505-57-22',
		},
		options: { selectOnClick: false },
		coords: [55.824754, 37.415963],
	},
	{
		id: 2,
		data: {
			src: '/image/contacts/Irkutsk.jpg',
			title: 'Irkutsk office',
			address: 'Irkutsk, Gorky str. 14B',
			mail: 'irkutsk@promminer.ru',
			phone: '8 (395) 248-23-34',
		},
		options: {
			selectOnClick: false,
		},
		coords: [52.2815, 104.279915],
	},
	{
		id: 3,
		data: {
			src: '/image/contacts/Dubai.jpg',
			title: 'Dubai office',
			address: 'Dubai, Busines Bay, The exchange tower, office 105.',
			mail: 'uae.promminer@gmail.com',
			phone: '+971 58 574 6282',
		},
		options: {
			selectOnClick: false,
		},
		coords: [25.186358, 55.260619],
	},
	{
		id: 4,
		data: {
			src: '/image/contacts/Peter.png',
			title: 'St. Petersburg office',
			address: 'St. Petersburg, Izmailovsky Prospekt 2B',
			phone: '8 (800) 505-57-22',
		},
		options: {
			selectOnClick: false,
		},
		coords: [59.918025, 30.30817],
	},
	{
		id: 5,
		data: {
			src: '/image/contacts/Hong.png',
			title: 'Hong-Kong office',
			address: '14 Science Museum Rd, Tsim Sha Tsui East, Гонконг',
		},
		options: {
			selectOnClick: false,
		},
		coords: [22.29526, 114.174947],
	},
]

const Contacts: FC = () => {
	const [state, setState] = useState()
	const [chosenPlace, setChosenPlace] = useState<number>()

	const onChosePlace = (id: number) => {
		setChosenPlace(id)
	}

	useEffect(() => {
		if (chosenPlace) {
			const elem = document.getElementById(`${chosenPlace}`)
			elem?.scrollIntoView({
				behavior: 'smooth',
				block: 'end',
				inline: 'nearest',
			})
		}
	}, [chosenPlace])

	return (
		<section className={styles.contacts_wrapper}>
			<h1>Contacts</h1>
			<div className={styles.info}>
				<div className={styles.contact_place}>
					{contactInfo.map(({ data, id }) => (
						<Fragment key={data.title}>
							<ContactItem
								id={id}
								imgSrc={data.src}
								title={data.title}
								address={data.address}
								mail={data.mail && data.mail}
								phone={data.phone && data.phone}
								onChoseClick={onChosePlace}
								isChosed={chosenPlace === id}
							/>
						</Fragment>
					))}
				</div>

				<YMaps
					query={{
						lang: 'en_US',
					}}
				>
					<Map
						state={state}
						height={566}
						defaultState={{ center: [55.751574, 37.573856], zoom: 3 }}
						className={styles.map}
					>
						{contactInfo.map(({ id, coords, data }) => (
							<Placemark
								key={id}
								geometry={coords}
								onClick={() => onChosePlace(id)}
							/>
						))}
						<ZoomControl options={{ float: 'bottom' }} />
					</Map>
				</YMaps>
			</div>
		</section>
	)
}

export default Contacts
