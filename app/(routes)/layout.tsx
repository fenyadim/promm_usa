'use client'

import Head from 'next/head'
import Script from 'next/script'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import 'swiper/scss/navigation'

import { Footer, Header, Providers } from '@/components'

import { persistor, store } from '@/redux/store'

import './globals.css'

import 'swiper/scss'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<Head>
				<link rel="icon" href="/icon.ico" sizes="any" />
			</Head>
			<body>
				<Providers>
					<Provider store={store}>
						<PersistGate loading={null} persistor={persistor}>
							<Header />
							<div className="container">{children}</div>
							<Footer />
						</PersistGate>
					</Provider>
				</Providers>
				<Script
					strategy="lazyOnload"
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				/>
				<Script strategy="lazyOnload">
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
				</Script>
			</body>
		</html>
	)
}
