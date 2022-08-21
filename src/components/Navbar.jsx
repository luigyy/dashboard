import React from 'react';
import {useStateContext} from '../contexts/ContextProvider'

const Navbar = () => {
    const {activeMenu, setActiveMenu} = useStateContext();
    return (
        <div>
            navbar
        </div>
    );
}

export default Navbar;
