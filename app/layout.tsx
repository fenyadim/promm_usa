'use client'

import { useState } from 'react'
import 'swiper/scss/navigation'

import { IsOpenSubMenuContext } from '@/utils/context'

import './globals.css'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

import 'swiper/scss'
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
				<IsOpenSubMenuContext.Provider value={{ isOpen, setIsOpen }}>
					<Header />
					{children}
					<Footer />
				</IsOpenSubMenuContext.Provider>
			</body>
		</html>
	)
}
