import React from 'react';
import classNames from 'classnames';

function MenuItem({children, id, menuType, onClick}) {
    return (
        <p 
            id={id} onClick={() => onClick({id})}
            className={id === menuType ? classNames(id) : null}>
            {children}
        </p>
    );
}

MenuItem.defaultProps = {
    id: null,
    children: 'NULL'
}

export default MenuItem;