import React from 'react';
import { Container, Typography } from "@material-ui/core";
import useStyles from '../Styles'


const Schedule = (props) => {

    const styles = useStyles()
    const {schedule, handleClick} = props
    const scheduleKeys = Object.keys(schedule)
    const userSchedule = scheduleKeys.reduce((acc, key) => {
        if(schedule[key]) {
            acc.push(
                <Container className={styles.schedule}>
                    <Typography>
                        {`${key}:00: ${schedule[key]}`}
                    </Typography>
                    <button onClick={() => handleClick(schedule[key])}>
                        Delete Course
                    </button>
                </Container>
                )
        }
        return acc
    },[])

    return (
        <Container>
            <Typography>
                {userSchedule}
            </Typography>
        </Container>
    )
} 

export default Schedule