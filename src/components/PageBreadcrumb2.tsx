import { Col, Row } from 'react-bootstrap'
import { PageMetaData } from './index'
import { Link } from 'react-router-dom'

import { FiChevronDown } from 'react-icons/fi'

interface PageTitleProps {
	appName?: string | null
	subtitle?: string | null
	title: string
}

const PageBreadcrumb2 = ({ title, appName, subtitle }: PageTitleProps) => {
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
									{appName && (
										<li className="breadcrumb-item">
											<Link to="#">{appName}</Link>
										</li>
									)}
									<li className="breadcrumb-item active">{subtitle}</li>
								</ol>
							</Col>
							<div className="col-auto align-self-center d-flex gap-2">
								<Link
									to="#"
									className="btn btn-lg btn-outline-primary rounded-pill d-flex align-items-center py-2 px-3"
									id="Dash_Month"
									style={{ fontWeight: 'bold' }}
								>
									<span className="month-name" id="Month_Name">
									{new Date().toLocaleString('default', { month: 'long' })} {/* Mês atual */}
									</span>
									<FiChevronDown className="icon-xs ms-1" />
								</Link>
							</div>
						</Row>
					</div>
				</Col>
			</Row>
		</>
	)
}

export default PageBreadcrumb2
