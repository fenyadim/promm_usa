import { Metadata, NextPage } from 'next'

import { Contacts } from '@/pages'

export const metadata: Metadata = {
	title: 'Contacts',
}

const ContactsPage: NextPage = () => {
	return <Contacts />
}

export default ContactsPage
