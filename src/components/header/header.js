import logo from './logo.svg';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <nav className='ti-header'>
            <NavLink className='ti-header-left_part' to='/'><img className='ti-header-logo' src={logo} alt='logo'/></NavLink>
            <ul className='ti-header-menu'>
                <li>
                    <NavLink to='/'>Главная</NavLink>
                </li>
                <li>
                    <NavLink to='/example'>Пример</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header;