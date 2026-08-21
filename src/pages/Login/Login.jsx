import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { useLoginMutation } from '@/api/authApi';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { INPUT_OPTIONS, INPUT_SIZE } from '@/constants/inputStyle';
import { PATHS } from '@/constants/routes';
import { login as setLogin } from '@/redux/slices/userSlice';
import TokenStorage from '@/utils/tokenStorage';

import * as styles from './Login.module.css';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [login, { isLoading, error }] = useLoginMutation();

    const [form, setForm] = useState({
        username: '',
        password: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const data = await login(form).unwrap();

            TokenStorage.setTokens({
                accessToken: data.accessToken,
                refreshToken: data.refreshToken,
            });

            dispatch(
                setLogin({
                    user: data,
                })
            );

            navigate(location.state?.from?.pathname || PATHS.HOME);
        } catch (error) {
            console.error(error?.data?.message || 'Invalid login or password');
        }
    };
    return (
        <main className={styles.container}>
            <form
                className={styles.form}
                onSubmit={handleSubmit}
            >
                <h1 className={styles.header}>Login</h1>
                <Input
                    labelValue='Username'
                    name='username'
                    option={INPUT_OPTIONS.FIRST}
                    size={INPUT_SIZE.FULL}
                    value={form.login}
                    onChange={handleChange}
                    placeholder='Username'
                    required
                />
                <Input
                    labelValue='password'
                    name='password'
                    type='password'
                    option={INPUT_OPTIONS.FIRST}
                    size={INPUT_SIZE.FULL}
                    value={form.password}
                    onChange={handleChange}
                    placeholder='Password'
                    required
                />
                {error && (
                    <p className={styles.error}>
                        {error?.data?.message || 'Invalid login or password'}
                    </p>
                )}
                <Button
                    type='submit'
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading...' : 'Login'}
                </Button>
            </form>
        </main>
    );
};

export default Login;
