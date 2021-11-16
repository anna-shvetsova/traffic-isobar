import { memo } from 'react';
import './button.css';

const Button = ({ children, href, onClick }) => {
    if (href) {
        return (
            <a className='ti-button' target="_blank" rel="noopener noreferrer" href={href}>{children}</a>
        )
    }
    return (
        <button className='ti-button' onClick={onClick}>{children}</button>
    );
}

export default memo(Button);