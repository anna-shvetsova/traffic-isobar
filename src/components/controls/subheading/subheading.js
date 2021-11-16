import { memo } from 'react';
import './subheading.css';

const Subheading = ({ children }) => {
    return (
        <h3 className='ti-subheading'>{children}</h3>
    );
}

export default memo(Subheading);