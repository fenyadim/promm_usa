import { Metadata, NextPage } from 'next'

import { Service } from '@/pages'

export const metadata: Metadata = {
	title: 'Promminer Service Center',
}

const ServicePage: NextPage = () => {
	return <Service />
}

export default ServicePage
