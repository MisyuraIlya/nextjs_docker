import {FC, useState} from 'react'
import Meta from '@/ui/Meta'
import Button from '@/ui/button/Button'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IEmailPassword } from '@/store/user/user.interface'
import Field from '@/ui/input/Field'
import { validEmail } from './valid-email'
import { useAuthRedirect } from './useAuthRedirect'

const Auth: FC = () => {

    useAuthRedirect()

    
    const {isLoading} = useAuth()

    const {login, register} = useActions()

    const [type, setType] = useState<'login' | 'register'>('login')

    const {register: formRegister, handleSubmit, formState: {errors}, reset} = useForm<IEmailPassword>({
        mode: 'onChange'
    })

    const onSubmit :SubmitHandler<IEmailPassword> = (data) => {
        if(type === 'login') login(data)
        else register(data)
        reset()
    }

    return (
    <Meta title='Auth'>
        {type}
        {isLoading && <p>loading ...</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
            <Field {...formRegister('email', {
                required: 'Email is required',
                pattern: validEmail
            })}
            placeholder='email'
            error={errors.email?.message}
            />

            <Field {...formRegister('password', {
                required: 'password is required',
                minLength: {
                    value:6,
                    message:'min length should more 6 symbols'
                }
            })}
            type='password'
            placeholder='password'
            error={errors.password?.message}
            />
             <Button>Auth</Button>

        </form>
    </Meta>
    )
}

export default Auth