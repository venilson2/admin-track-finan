import { ComponentContainerCard, PageBreadcrumb } from '@/components';
import { Card, CardBody, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import smallProject1 from '@/assets/images/widgets/project1.jpg';
import smallProject2 from '@/assets/images/widgets/project2.jpg';
import smallProject3 from '@/assets/images/widgets/project3.jpg';
import smallProject4 from '@/assets/images/widgets/project4.jpg';
import account1 from '@/assets/images/widgets/project1.jpg';
import account2 from '@/assets/images/widgets/project1.jpg';
import account3 from '@/assets/images/widgets/project1.jpg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { AiOutlineSortDescending } from 'react-icons/ai';

const Transactions = () => {
    const transactions = [
        {
            date: '2024-10-01',
            description: 'Pagamento de serviços de consultoria e assessoria para o projeto X',
            category: 'Serviços',
            account: 'Conta Corrente',
            value: '$500',
        },
        {
            date: '2024-10-05',
            description: 'Compra de materiais para o projeto Y',
            category: 'Materiais',
            account: 'Conta Corrente',
            value: '$300',
        },
        {
            date: '2024-10-10',
            description: 'Pagamento de fornecedores para o projeto Z',
            category: 'Fornecedores',
            account: 'Conta Poupança',
            value: '$150',
        },
        {
            date: '2024-10-15',
            description: 'Serviços de marketing digital para o projeto A',
            category: 'Marketing',
            account: 'Conta Corrente',
            value: '$200',
        },
    ];

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

    return (
        <>
            <Container>
                <PageBreadcrumb title="Transações" />
                <Row className="justify-content-center">
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
                                            <th style={{ position: 'relative', cursor: 'pointer' }}>
                                                Data
                                            </th>
                                            <th style={{ position: 'relative', cursor: 'pointer' }}>
                                                Descrição
                                            </th>
                                            <th style={{ position: 'relative', cursor: 'pointer' }}>
                                                Categoria
                                            </th>
                                            <th style={{ position: 'relative', cursor: 'pointer' }}>
                                                Conta
                                            </th>
                                            <th style={{ position: 'relative', cursor: 'pointer' }}>
                                                Valor
                                            </th>
                                            <th className="text-end">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transactions.map((transaction, index) => (
                                            <tr key={index}>
                                                <td>{transaction.date}</td>
                                                <td>
                                                    <span
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title={transaction.description}
                                                        style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px', display: 'inline-block' }}
                                                    >
                                                        {transaction.description.length > 30 ? `${transaction.description.substring(0, 30)}...` : transaction.description}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img
                                                            src={categoryImages[transaction.category]} // Imagem da categoria
                                                            alt={transaction.category}
                                                            style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }}
                                                        />
                                                        {transaction.category}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img
                                                            src={accountImages[transaction.account]} // Imagem da conta
                                                            alt={transaction.account}
                                                            style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }}
                                                        />
                                                        {transaction.account}
                                                    </div>
                                                </td>
                                                <td>{transaction.value}</td>
                                                <td className="text-end">
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
                </Row>
            </Container>
        </>
    );
};

export default Transactions;