import { Metadata, NextPage } from 'next'

import { Delivery } from '@/pages'

export const metadata: Metadata = {
	title: 'Payment and delivery',
}

const DeliveryPage: NextPage = () => {
	return <Delivery />
}

export default DeliveryPage
