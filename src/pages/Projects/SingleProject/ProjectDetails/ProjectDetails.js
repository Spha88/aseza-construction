import React from 'react';
import styles from './ProjectDetails.module.scss';
import { formatDate } from '../../../../lib/utils';

const ProjectDetails = ({ details }) => {
    const { architecture, company, dateStarted, dateCompleted, employees, location, surfaceArea } = details;
    return (
        <ul className={styles.Details}>
            { company && <li><span>Company: </span>{company}</li>}
            { location && <li><span>Location: </span>{location} </li>}
            { surfaceArea && <li><span>Surface Area: </span>{surfaceArea} m<sup>2</sup></li>}
            { dateStarted && <li><span>Start: </span>{formatDate(dateStarted)}</li>}
            { dateCompleted && <li><span>Finish: </span>{formatDate(dateCompleted)}</li>}
            { architecture && <li><span>Architecture: </span>{architecture}</li>}
            { employees && <li><span>Employees: </span>Over {employees}</li>}
        </ul>
    )
}

export default ProjectDetails
