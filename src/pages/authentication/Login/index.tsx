import {
	Button,
	Card,
	Col,
	Image,
	Nav,
	NavItem,
	NavLink,
	Row,
	TabContainer,
	TabContent,
	TabPane,
	Form,
} from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import logoDark from '@/assets/images/logo-sm-dark.png';
import { FormInputPassword, FormTextInput, PageMetaData } from '@/components';
import useLogin from './useLogin';
import AuthLayout from '../AuthLayout';
import Register from '../Register';
import { useState } from 'react';

const Login = () => {
	const { loading, control, login, redirectUrl, isAuthenticated } = useLogin();
	const [activeKey, setActiveKey] = useState("1");

	return (
		<>
			<PageMetaData title="Login" />
			{isAuthenticated && <Navigate to={redirectUrl} replace />}
			<AuthLayout>
				<Row className="g-0 vh-100">
					<Col md={6} className="d-flex flex-column justify-content-center align-items-center bg-light">
						<Image src={logoDark} height="50" alt="logo" className="mb-3" />
						<h4 className="mt-3 mb-1 fw-semibold text-dark">Let's Get Started Dastone</h4>
						<p className="text-muted">Sign in to continue to Dastone.</p>
					</Col>
					<Col md={6} className="d-flex justify-content-center align-items-center">
						<Card.Body style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
							<TabContainer defaultActiveKey="1">
								<Nav variant="pills" className="justify-content-center mb-4" style={{ height: '50px' }}>
									<NavItem>
										<NavLink 
											eventKey="1" 
											className={`fs-5 fw-bold rounded-pill px-4 py-2 ${activeKey === "1" ? "bg-primary text-white" : "text-primary"}`} 
											style={{ transition: 'background-color 0.3s' }}
											onClick={() => setActiveKey("1")}
										>
											ENTRAR
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink 
											eventKey="2" 
											className={`fs-5 fw-bold rounded-pill px-4 py-2 ${activeKey === "2" ? "bg-primary text-white" : "text-primary"}`} 
											style={{ transition: 'background-color 0.3s' }}
											onClick={() => setActiveKey("2")}
										>
											CADASTRAR
										</NavLink>
									</NavItem>
								</Nav>
								<TabContent className="mt-4" style={{ minHeight: '400px' }}> {/* Altura mínima para o conteúdo do TabPane */}
									<TabPane eventKey="1">
										<Form onSubmit={login} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
											<Form.Group className="mb-4">
												<FormTextInput
													name="email"
													label="seu e-mail"
													control={control}
													placeholder="digite seu e-mail"
													style={{ fontSize: '1.1rem', padding: '10px' }}
												/>
											</Form.Group>
											<Form.Group className="mb-4">
												<FormInputPassword
													name="password"
													label="senha"
													control={control}
													placeholder="digite sua senha"
													//@ts-ignore
													style={{ fontSize: '1.1rem', padding: '10px' }}
												/>
											</Form.Group>
											<Row className="align-items-center">
												<Link to="/auth-recover-pw" className="text-muted fs-4 text-center">
													Esqueceu sua senha?
												</Link>
											</Row>
											<div className="d-grid mt-4">
												<Button
													variant="primary"
													type="submit"
													disabled={loading}
													style={{
														borderRadius: '25px',
														fontSize: '1.1rem',
														padding: '10px 20px'
													}}
												>
													Entrar <i className="fas fa-sign-in-alt ms-1"></i>
												</Button>
											</div>
										</Form>
									</TabPane>

									<TabPane eventKey="2">
										<Register />
									</TabPane>
								</TabContent>
							</TabContainer>
						</Card.Body>
					</Col>
				</Row>
			</AuthLayout>
		</>
	);
};

export default Login;