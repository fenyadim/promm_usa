import { Metadata, NextPage } from 'next'

import { Home } from '@/pages'

export const metadata: Metadata = {
	title: 'Buy equipment for mining cryptocurrencies',
	description: 'Buy equipment for mining cryptocurrencies.',
}

const HomePage: NextPage = () => {
	return <Home />
}

export default HomePage
