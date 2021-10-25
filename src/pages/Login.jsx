import React, { useContext } from 'react'
import { AuthContext } from '../components/context'
import MyButtonAdd from '../components/UI/button/MyButtonAdd'
import MyInput from '../components/UI/input/MyInput'

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div className="navbar"> 
            <h1 style={{marginBottom: 20}}>Страница логина</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль" />
                <MyButtonAdd style={{padding:10}}>Войти</MyButtonAdd>
            </form>
        </div>
    )
}

export default Login
