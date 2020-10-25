import React from 'react';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

const SidebarIcon = ({handleClick,sidebarOpen}) => {
    return(
        <span onClick={handleClick}>
            {sidebarOpen ? <GrClose /> : <FaBars />}
        </span>
    );
}

export default SidebarIcon;