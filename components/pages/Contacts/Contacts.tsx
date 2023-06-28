'use client'

import { FC, Fragment, useState } from 'react'
import { Map, Placemark, YMaps, ZoomControl } from 'react-yandex-maps'

import { ContactItem } from '@/components'

import styles from './Contacts.module.scss'

const Contacts: FC = () => {
	const [state, setState] = useState()

	const contactInfo = [
		{
			src: '/image/contacts/Moskva.jpg',
			title: 'Moscow office',
			address: 'Moscow, Lyotnaya st., 99 st3, office 4',
			mail: 'info@promminer.ru',
			phone: '8 (800) 505-57-22',
		},
		{
			src: '/image/contacts/Irkutsk.jpg',
			title: 'Irkutsk office',
			address: 'Irkutsk, Gorky str. 14B',
			mail: 'irkutsk@promminer.ru',
			phone: '8 (395) 248-23-34',
		},
		{
			src: '/image/contacts/Dubai.jpg',
			title: 'Dubai office',
			address: 'Dubai, Busines Bay, The exchange tower, office 105.',
			mail: 'uae.promminer@gmail.com',
			phone: '+971 58 574 6282',
		},
		{
			src: '/image/contacts/Peter.png',
			title: 'St. Petersburg office',
			address: 'St. Petersburg, Izmailovsky Prospekt 2B',
			phone: '8 (800) 505-57-22',
		},
		{
			src: '/image/contacts/Hong.png',
			title: 'Hong-Kong office',
			address: '14 Science Museum Rd, Tsim Sha Tsui East, Гонконг',
		},
	]

	return (
		<section className={styles.contacts_wrapper}>
			<h1>Contacts</h1>
			<div className={styles.info}>
				<div className={styles.contact_place}>
					{contactInfo.map(({ src, title, phone, mail, address }) => (
						<Fragment key={title}>
							<ContactItem
								imgSrc={src}
								title={title}
								address={address}
								mail={mail && mail}
								phone={phone && phone}
							/>
						</Fragment>
					))}
				</div>
				<YMaps query={{ lang: 'en_US' }}>
					<Map
						state={state}
						height={566}
						defaultState={{ center: [55.751574, 37.573856], zoom: 3 }}
						className={styles.map}
					>
						<Placemark geometry={[55.684758, 37.738521]} />
						<ZoomControl options={{ float: 'bottom' }} />
					</Map>
				</YMaps>
			</div>
		</section>
	)
}

export default Contacts
