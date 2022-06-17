import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { FaPlay, FaCode } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';
import { NavLink } from 'react-router-dom';

function SingleProject({ id, name, code, demo, image, theme }) {
    const useStyles = makeStyles((t) => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 50,
            border: `2px solid ${theme.tertiary}`,
            color: theme.tertiary,
            transition: 'all 0.2s',
           
        },
        icon: {
            fontSize: '1.1rem',
            transition: 'all 0.2s',
            // '&:hover': {},
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <NavLink
                                className='navLink'
                                to='/projects'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
            <div
                key={id}
                className='singleProject'
                style={{ backgroundColor: theme.primary }}  
                >
                <div className='projectContent'>
                    <h2
                        id={name.replace(' ', '-').toLowerCase()}
                        style={{ color: theme.secondary }}
                        >
                        {name}
                    </h2>
                    <img src={image ? image : placeholder} alt={name} />
                    <div className='project--showcaseBtn'>
                        
                    </div>
                </div>
               
                    
            </div>
            </NavLink>
         </Fade>
    );
}

export default SingleProject;
