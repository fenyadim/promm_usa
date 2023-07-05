'use client'

import { useState } from 'react'
import { Provider } from 'react-redux'
import 'swiper/scss/navigation'

import { Footer, Header } from '@/components'

import { store } from '@/redux/store'

import { IsOpenSubMenuContext } from '@/utils/context'

import './globals.css'

import 'swiper/scss'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<html lang="en">
			<body style={isOpen ? { overflowY: 'hidden' } : { overflowX: 'hidden' }}>
				<Provider store={store}>
					<IsOpenSubMenuContext.Provider value={{ isOpen, setIsOpen }}>
						<Header />
						{children}
						<Footer />
					</IsOpenSubMenuContext.Provider>
				</Provider>
			</body>
		</html>
	)
}
