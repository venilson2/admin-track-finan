import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate } from 'react-router-dom'
import { FormInputPassword, FormTextInput } from '@/components'
import { Button, Col, Row } from 'react-bootstrap'

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
			<FormTextInput
				name="email"
				label="E-mail"
				containerClass="mb-2"
				control={control}
				placeholder="digite seu e-mail"
			/>
			<FormInputPassword
				name="password"
				label="Password"
				control={control}
				containerClass="mb-2"
				placeholder="digite sua senha"
			/>
			<FormInputPassword
				name="confirmPassword"
				label="Confirme sua senha"
				control={control}
				containerClass="mb-2"
				placeholder="confirme sua senha"
			/>

			<Row className="form-group my-3">
				<Col sm={12}>
					<div className="custom-control custom-switch switch-success">
						<input
							type="checkbox"
							className="custom-control-input"
							id="customSwitchSuccess2"
						/>
						<label
							className="form-label text-muted"
							htmlFor="customSwitchSuccess2"
						>
							Ao continuar, estou de acordo com os{' '}
							<Link to="#" className="text-primary">
								Termos de uso
							</Link>
						</label>
					</div>
				</Col>
			</Row>

			<Row className="form-group mb-0">
				<Col xs={12}>
					<Button
						variant="primary"
						type="submit"
						className="w-100 waves-effect waves-light"
					>
						Cadastrar <i className="fas fa-sign-in-alt ms-1"></i>
					</Button>
				</Col>
			</Row>
		</form>
	)
}

export default Register
