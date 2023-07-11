import { Metadata, NextPage } from 'next'

import { Investment } from '@/pages'

export const metadata: Metadata = {
	title: 'Investing in mining',
}

const InvestmentPage: NextPage = () => {
	return <Investment />
}

export default InvestmentPage
