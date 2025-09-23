import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import './Education.css'

function EducationCard({ id, institution, course, startYear, endYear, location, courses }) {

    const { theme } = useContext(ThemeContext);
    const [showDialog, setShowDialog] = useState(false);

    const useStyles = makeStyles((t) => ({
        educationCard : {
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
                className={`education-card ${classes.educationCard}`}
                onMouseEnter={() => setShowDialog(true)}
                onMouseLeave={() => setShowDialog(false)}
                style={{ position: 'relative' }}
            >
                <div className="educard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                </div>
                <div className="education-details">
                    <h6 style={{color: theme.primary, fontSize: '1rem'}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{course}</h4>
                    <h5 style={{color: theme.tertiary80}}>{institution}</h5>
                </div>
                <div className="education-location" style={{color: theme.tertiary80}}>
                    {location}
                </div>
                
                {showDialog && (
                    <div className="courses-dialog" style={{
                        backgroundColor: theme.secondary,
                        border: `2px solid ${theme.primary}`,
                        color: theme.tertiary
                    }}>
                        <h4 style={{color: theme.primary}}>Relevant Courses</h4>
                        <ul>
                            {courses.map((course, index) => (
                                <li key={index} style={{color: theme.tertiary}}>{course}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </Fade>        
    )
}

export default EducationCard
