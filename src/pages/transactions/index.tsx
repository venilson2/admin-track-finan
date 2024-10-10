import { PageBreadcrumb } from '@/components';
import { Card, CardBody, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import smallProject1 from '@/assets/images/widgets/project1.jpg';
import smallProject2 from '@/assets/images/widgets/project2.jpg';
import smallProject3 from '@/assets/images/widgets/project3.jpg';
import smallProject4 from '@/assets/images/widgets/project4.jpg';
import account1 from '@/assets/images/widgets/project1.jpg';
import account2 from '@/assets/images/widgets/project1.jpg';
import account3 from '@/assets/images/widgets/project1.jpg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Statistics from './components/Statistics';
import { transactions } from './data';
import { Fragment } from 'react/jsx-runtime';

const Transactions = () => {
    
    const categoryImages: Record<string, string> = {
        'Serviços': smallProject1,
        'Materiais': smallProject2,
        'Fornecedores': smallProject3,
        'Marketing': smallProject4,
    };

    const accountImages: Record<string, string> = {
        'Conta Corrente': account1,
        'Conta Poupança': account2,
        'Conta de Investimento': account3,
    };

	const formatCurrency = (value: number) => {
        return `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString('pt-BR', {
			day: 'numeric', 
			month: 'numeric', 
			year: 'numeric'
		});
	};

    return (
        <>
            <Container>
                <PageBreadcrumb title="Transações" />
                <Row className="justify-content-center">
					<Col lg={9}>
						<Card className="shadow-sm border-0">
							<CardBody>
								<div className="d-flex justify-content-center align-items-center mb-3">
									<Link to="#" className="d-flex align-items-center py-2 px-2 me-2" id="Prev_Month">
										<FiChevronLeft className="icon-sm ms-1 text-primary" />
									</Link>

									<span className="btn btn-outline-primary rounded-pill d-flex align-items-center py-2 px-3" id="Dash_Month" style={{ fontWeight: 'bold' }}>
										{new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()}
									</span>

									<Link to="#" className="d-flex align-items-center py-2 px-2 ms-2" id="Next_Month">
										<FiChevronRight className="icon-sm ms-1 text-primary" />
									</Link>
								</div>
								<div className="table-responsive">
									<table className="table mb-0 table-centered">
										<thead className="table-light">
											<tr>
												<th className="text-start">Data</th>
												<th className="text-center">Descrição</th>
												<th className="text-center">Categoria</th>
												<th className="text-center">Conta</th>
												<th className="text-end">Valor</th>
												<th className="text-end">Ações</th>
											</tr>
										</thead>
										<tbody>
											{transactions.map((day, dayIndex) => (
												<Fragment key={dayIndex}>
													{dayIndex != 0 && (
														<tr>
															<td colSpan={4} className="text-start font-weight-bold px-3">
																<div className="d-flex align-items-center justify-content-between py-2 px-4 rounded-pill">
																	<span>Saldo do Final do Dia</span>
																</div>
															</td>
															<td colSpan={1} className="text-end font-weight-bold">
																<span>{formatCurrency(day.end_of_day_balance)}</span>
															</td>
															<td colSpan={1}></td>
														</tr>
													)}
													{day.transactions.map((transaction, index) => (
														<tr key={index}>
															<td style={{ width: '10%' }}>{formatDate(transaction.diposted_date)}</td>
															<td style={{ width: '30%' }}>
																<span
																	data-bs-toggle="tooltip"
																	data-bs-placement="top"
																	title={transaction.description}
																	style={{
																		whiteSpace: 'nowrap',
																		overflow: 'hidden',
																		textOverflow: 'ellipsis',
																		maxWidth: '200px',
																		display: 'inline-block',
																	}}
																>
																	{transaction.description.length > 30 ? `${transaction.description.substring(0, 30)}...` : transaction.description}
																</span>
															</td>
															<td style={{ width: '15%' }}>
																<div className="d-flex align-items-center">
																	<img
																		src={categoryImages[transaction.category.id]} // Imagem da categoria
																		alt={transaction.category.name}
																		style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }}
																	/>
																	{transaction.category.name}
																</div>
															</td>
															<td style={{ width: '15%' }}>
																<div className="d-flex align-items-center">
																	<img
																		src={accountImages[transaction.wallet.id]} // Imagem da conta
																		alt={transaction.wallet.name}
																		style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }}
																	/>
																	{transaction.wallet.name}
																</div>
															</td>
															{/* Valor da transação alinhado à direita com tamanho fixo */}
															<td className="text-end" style={{ width: '15%' }}>{formatCurrency(transaction.transaction_amount)}</td>
															<td className="text-end" style={{ width: '10%' }}>
																<Dropdown className="d-inline-block">
																	<DropdownToggle variant="link" id="dropdown-basic">
																		<i className="las la-ellipsis-v font-20 text-muted" />
																	</DropdownToggle>

																	<DropdownMenu>
																		<DropdownItem href="#">Criar Projeto</DropdownItem>
																		<DropdownItem href="#">Abrir Projeto</DropdownItem>
																		<DropdownItem href="#">Detalhes das Tarefas</DropdownItem>
																	</DropdownMenu>
																</Dropdown>
															</td>
														</tr>
													))}
												</Fragment>
											))}
										</tbody>
									</table>
								</div>
								<nav aria-label="Page navigation example">
									<ul className="pagination justify-content-end">
										<li className="page-item disabled">
											<Link className="page-link" to="#" tabIndex={-1}>
												Previous
											</Link>
										</li>
										<li className="page-item">
											<Link className="page-link" to="#">
												1
											</Link>
										</li>
										<li className="page-item">
											<Link className="page-link" to="#">
												2
											</Link>
										</li>
										<li className="page-item">
											<Link className="page-link" to="#">
												3
											</Link>
										</li>
										<li className="page-item">
											<Link className="page-link" to="#">
												Next
											</Link>
										</li>
									</ul>
								</nav>
							</CardBody>
						</Card>
					</Col>
					<Col lg={3}>
						<Statistics />
					</Col>
				</Row>
            </Container>
        </>
    );
};

export default Transactions;