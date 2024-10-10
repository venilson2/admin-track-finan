import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate } from 'react-router-dom'
import { FormInputPassword, FormTextInput } from '@/components'
import { Button, Col, Row, Form } from 'react-bootstrap'

const Register = () => {
	const schemaResolver = yup.object().shape({
		email: yup
			.string()
			.required('Por favor, insira seu e-mail')
			.email('Por favor, insira um e-mail válido'),
		password: yup.string().required('Por favor, insira sua senha'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password')], 'As senhas devem coincidir'),
	})

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schemaResolver),
	})

	const navigate = useNavigate()

	return (
		<form
			className="form-horizontal auth-form"
			onSubmit={handleSubmit(() => navigate('/auth/login'))}
		>
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
			<Form.Group className="mb-4">
				<FormInputPassword
					name="confirmPassword"
					label="Confirme sua senha"
					control={control}
					placeholder="confirme sua senha"
					//@ts-ignore
					style={{ fontSize: '1.1rem', padding: '10px' }}
				/>
			</Form.Group>

			<Row className="form-group my-3">
				<Col sm={12} className="d-flex align-items-center mb-3">
					<div className="custom-control custom-switch me-2" style={{ display: 'flex', alignItems: 'center' }}>
						<input
							type="checkbox"
							className="custom-control-input"
							id="customSwitchSuccess2"
							style={{ width: '20px', height: '20px' }}
						/>
						<label
							className="custom-control-label text-muted"
							htmlFor="customSwitchSuccess2"
							style={{ fontSize: '0.9rem', marginLeft: '10px' }}
						>
							Ao continuar, estou de acordo com os{' '}
							<Link to="#" className="text-primary fw-bold">
								Termos de uso
							</Link>
						</label>
					</div>
				</Col>
			</Row>

			<div className="d-grid mt-4">
				<Button
					variant="primary"
					type="submit"
					style={{
						borderRadius: '25px',
						fontSize: '1.1rem',
						padding: '10px 20px'
					}}
					>
					Cadastrar <i className="fas fa-sign-in-alt ms-1"></i>
				</Button>
			</div>
		</form>
	)
}

export default Register
