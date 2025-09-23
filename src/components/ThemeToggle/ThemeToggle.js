import React, { useContext } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { makeStyles } from '@material-ui/core/styles';

import './ThemeToggle.css';
import { ThemeContext } from '../../contexts/ThemeContext';

function ThemeToggle() {
    const { theme, isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        toggleButton: {
            fontSize: '1.8rem',
            color: theme.tertiary,
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            border: `2px solid ${theme.primary}`,
            backgroundColor: theme.secondary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            '&:hover': {
                backgroundColor: theme.primary,
                color: theme.secondary,
                transform: 'scale(1.1)',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.5rem',
                padding: '6px',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className="theme-toggle">
            <button
                className={classes.toggleButton}
                onClick={toggleDarkMode}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
                {isDarkMode ? <IoSunny /> : <IoMoon />}
            </button>
        </div>
    );
}

export default ThemeToggle; 