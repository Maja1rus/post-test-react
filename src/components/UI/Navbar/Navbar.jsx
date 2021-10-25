import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import MyButtonDel from '../button/MyButtonDel'
import { AuthContext } from '../../context'

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className={style.navbar}>
            <div className={style.navbar__links}>
            <Link className={style.navbar__link} to="/about">О сайте</Link>
            <Link className={style.navbar__link}  to="/posts">Посты</Link>
                <MyButtonDel
                    style={{ padding: 10, marginLeft: 15 }}
                    onClick={logout}
                >
                    Выйти
                </MyButtonDel>
            </div>
        </div>
    )
}

export default Navbar
