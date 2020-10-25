import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as GrIcons from 'react-icons/gr';
import * as SiIcons from 'react-icons/si';

export const NavigationData = [
    {
        title: 'Home',
        path: '/',
        Icons: <AiIcons.AiFillHome />,
    },
    {
        title: 'Contact',
        path: '/contact',
        Icons: <GrIcons.GrContact />,
    },
    {
        title: 'Post a Job',
        path: '/jobpost',
        Icons: <SiIcons.SiPostwoman />,
    }
]