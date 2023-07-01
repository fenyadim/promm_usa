import { Metadata, NextPage } from 'next'

import { TurnkeyMining } from '@/pages'

export const metadata: Metadata = {
	title: 'Turnkey Mining',
}

const TurnkeyMiningPage: NextPage = () => {
	return <TurnkeyMining />
}

export default TurnkeyMiningPage
