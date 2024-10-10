import { Col, Row } from 'react-bootstrap'
import { PageMetaData } from '.'
interface PageTitleProps {
	subName?: string
	title: string
}

const PageBreadcrumb = ({ title, subName }: PageTitleProps) => {
	return (
		<>
			<PageMetaData title={title} />
			<Row className="row">
				<Col sm={12}>
					<div className="page-title-box">
						<Row>
							<Col>
								<h3 className="">{title}</h3>
								<ol className="breadcrumb">
									<li className="breadcrumb-item active">{subName}</li>
								</ol>
							</Col>
						</Row>
					</div>
				</Col>
			</Row>
		</>
	)
}

export default PageBreadcrumb
