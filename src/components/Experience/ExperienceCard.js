import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'

function ExperienceCard({id, company, jobtitle, startYear, endYear, location, description}) {

    const { theme } = useContext(ThemeContext);
    const [showDialog, setShowDialog] = useState(false);

    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();


    return (
        <Fade bottom>
            <div 
                key={id} 
                className={`experience-card ${classes.experienceCard}`}
                onMouseEnter={() => setShowDialog(true)}
                onMouseLeave={() => setShowDialog(false)}
                style={{ position: 'relative' }}
            >
                <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
                </div>
                <div className="experience-details">
                    <h6 style={{color: theme.primary, fontSize: '1rem'}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{jobtitle}</h4>
                    <h5 style={{color: theme.tertiary80}}>{company}</h5>
                </div>
                <div className="experience-location" style={{color: theme.tertiary80}}>
                    {location}
                </div>
                
                {showDialog && (
                    <div className="description-dialog" style={{
                        backgroundColor: theme.secondary,
                        border: `2px solid ${theme.primary}`,
                        color: theme.tertiary
                    }}>
                        <div className="description-content">
                            <p style={{color: theme.tertiary}}>{description}</p>
                        </div>
                    </div>
                )}
            </div>
        </Fade>   
    )
}

export default ExperienceCard
