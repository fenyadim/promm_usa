'use client'

import { Provider } from 'react-redux'
import 'swiper/scss/navigation'

import { Footer, Header } from '@/components'

import { store } from '@/redux/store'

import './globals.css'
import Providers from './providers'

import 'swiper/scss'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<Provider store={store}>
						<Header />
						{children}
						<Footer />
					</Provider>
				</Providers>
			</body>
		</html>
	)
}
