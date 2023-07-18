import { Metadata, NextPage } from 'next'

import { Basket } from '@/pages'

export const metadata: Metadata = {
	title: 'Basket',
}

const BasketPage: NextPage = () => {
	return <Basket />
}

export default BasketPage
