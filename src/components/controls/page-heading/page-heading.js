import { memo } from 'react';
import './page-heading.css';

const PageHeading = ({children}) => {
    return (
        <div className='ti-page-heading'>
            <hr />
            <h2>{children}</h2>
            <hr />
        </div>
    );
}

export default memo(PageHeading);