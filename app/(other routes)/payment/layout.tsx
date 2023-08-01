'use client'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { Providers } from '@/components'

import { persistor, store } from '@/redux/store'

import '../../(routes)/globals.css'

const PaymentLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body style={{ margin: 0 }}>
				<Providers>
					<Provider store={store}>
						<PersistGate loading={null} persistor={persistor}>
							{children}
						</PersistGate>
					</Provider>
				</Providers>
			</body>
		</html>
	)
}

export default PaymentLayout
