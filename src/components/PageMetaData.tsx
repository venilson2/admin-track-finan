import { Helmet } from 'react-helmet'

const PageMetaData = ({ title }: { title: string }) => {
	return (
		<Helmet>
			<title>{title} | Teste 123</title>
		</Helmet>
	)
}

export default PageMetaData
