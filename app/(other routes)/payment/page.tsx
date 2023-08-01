import { Metadata, NextPage } from 'next'

import { Payment } from '@/pages'

export const metadata: Metadata = {
	title: 'Payment',
}

const PaymentPage: NextPage = () => {
	return <Payment />
}

export default PaymentPage
