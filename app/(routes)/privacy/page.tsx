import { Metadata, NextPage } from 'next'

import { Privacy } from '@/pages'

export const metadata: Metadata = {
	title: 'Privacy',
}

const PrivacyPage: NextPage = () => {
	return <Privacy />
}

export default PrivacyPage
