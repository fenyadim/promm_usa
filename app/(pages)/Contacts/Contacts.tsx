'use client'

import { FC, Fragment, useEffect, useState } from 'react'
import { Map, Placemark, YMaps, ZoomControl } from 'react-yandex-maps'

import { ContactItem } from '@/components'

import { contactInfo } from '@/api/contactInfo'

import styles from './Contacts.module.scss'

const mapState = { center: [55.751574, 37.573856], zoom: 3 }

const Contacts: FC = () => {
	const [chosenPlace, setChosenPlace] = useState<number>()

	const chosedCoord = contactInfo.filter(({ id }) => chosenPlace === id)[0]

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
						//@ts-ignore
						state={chosedCoord && { center: chosedCoord.coords }}
						defaultState={mapState}
						className={styles.map}
					>
						{contactInfo.map(({ id, coords }) => (
							<Placemark
								key={id}
								geometry={coords}
								onClick={() => onChosePlace(id)}
								options={{
									iconLayout: 'default#image',
									iconImageSize: [48, 56],
									iconImageOffset: [-40, -40],
									iconImageHref:
										id !== chosenPlace
											? '/image/contacts/Point.svg'
											: '/image/contacts/ActivePoint.svg',
								}}
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
