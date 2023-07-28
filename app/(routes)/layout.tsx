'use client'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import 'swiper/scss/navigation'

import { Footer, Header } from '@/components'

import { persistor, store } from '@/redux/store'

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
						<PersistGate loading={null} persistor={persistor}>
							<Header />
							{children}
							<Footer />
						</PersistGate>
					</Provider>
				</Providers>
			</body>
		</html>
	)
}
