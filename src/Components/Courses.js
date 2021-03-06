import React from 'react';
import { Container, Typography } from "@material-ui/core";
import useStyles from '../Styles'


const Courses = (props) => {

    const {courses, handleClick} = props
    const styles = useStyles()

    const allCourses = courses.map(course => {
            return (
                <Container className={styles.course}>
                    <Typography>{course.name}</Typography>
                    <Typography>{`Time: ${course.time}:00`}</Typography>
                    <Typography>{`ID:${course.id}`}</Typography>
                    <button onClick={() => handleClick(course)}>Add Course</button>
                </Container>
            )
        })
    
    return (
        <Container className={styles.courseContainer} >
            <Typography>
                {allCourses}
            </Typography>
        </Container>
    )
}

export default Courses