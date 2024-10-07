import { HttpClient } from '@/common'
import { useAuthContext } from '@/context'
import type { User } from '@/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { type AxiosResponse } from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import * as yup from 'yup'

export default function useLogin() {
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()

	const { isAuthenticated, saveSession } = useAuthContext()

	const schemaResolver = yup.object().shape({
		email: yup
			.string()
			.email('Por favor, insira um e-mail válido')
			.required('Por favor, insira seu e-mail'),
		password: yup.string().required('Por favor, insira sua senha'),
	})

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schemaResolver),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	type LoginFormFields = yup.InferType<typeof schemaResolver>

	// const redirectUrl = useMemo(() => (location.state?.from.pathname, location.pathname ?? "/"), [location.state]);
	const redirectUrl = searchParams.get('next') ?? '/dashboards/analytics'

	const login = handleSubmit(async function (values: LoginFormFields) {
		setLoading(true)
		try {
			const res: AxiosResponse<User> = await HttpClient.post('/login', {
				'email': values.email,
				'password': values.password,
			})
			if (res.data.token) {
				saveSession({
					...(res.data ?? {}),
					token: res.data.token,
				})
				toast.success('Login efetuado com sucesso, redirecionando...', {
					position: 'top-right',
					duration: 2000,
				})
				navigate(redirectUrl)
			}
		} catch (e: any) {
			if (e.response?.data?.error) {
				toast.error(e.response?.data?.error, {
					position: 'top-right',
					duration: 2000,
				})
			}
		} finally {
			setLoading(false)
		}
	})

	return { loading, login, redirectUrl, isAuthenticated, control }
}
