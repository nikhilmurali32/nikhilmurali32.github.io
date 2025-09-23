import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import { FaExternalLinkAlt } from "react-icons/fa";

import './Achievement.css'

function AchievementCard({id, title, details, date, field, image, link}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        achievementCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();
    return (
        <Fade bottom>
           <div key={id} className={`achievement-card ${classes.achievementCard}`}>
                <div className="achievecard-content">
                    <div className="achievecard-details1">
                        <h2 style={{color: theme.tertiary}}>{title}</h2>
                    </div>
                    <div className="achievecard-details2">
                        <a 
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="certification-link"
                            style={{color: theme.primary}}
                        >
                            <FaExternalLinkAlt />
                            <span>View Certification</span>
                        </a>
                    </div>
                </div>
           </div>
        </Fade>
        
    )
}

export default AchievementCard
