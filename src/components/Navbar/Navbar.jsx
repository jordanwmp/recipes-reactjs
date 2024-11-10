import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css'
import { BiSearchAlt2 } from "react-icons/bi";

import logo from '../../assets/logo.png'
import { ApiContext } from '../../context/ApiContext';

const Navbar = () => {

    const { getData } = useContext(ApiContext)
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        if (!search) return
        getData(`search.php?s=${search}`)
        setSearch('')
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt='Receitas Mestre Cuca' />
                <Link to='/' className={styles.link}>
                    <span>MestreCuca</span>
                </Link>
            </div>
            <form onSubmit={handleSearch}>
                <input
                    type='text'
                    placeholder='Pesquisar receita'
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button type='submit'>
                    <BiSearchAlt2 />
                </button>
            </form>
        </div>
    )
}

export default Navbar