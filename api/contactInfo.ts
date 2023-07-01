import { PlacemarkGeometry } from 'react-yandex-maps'

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

export const contactInfo: Array<ContactType> = [
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
