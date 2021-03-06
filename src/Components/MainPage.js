import React, {useEffect, useState} from 'react';
import {sampleUser, sampleSchedule, sampleCourses} from '../SampleData';
import { Container, Typography } from "@material-ui/core";
import Schedule from './Schedule'
import Courses from './Courses'
import useStyles from '../Styles';

const MainPage = () => {
    
    const styles = useStyles()
    const [schedule, setSchedule] = useState({})
    const [courses, setCourses] = useState([])
    const scheduleKeys = Object.keys(schedule)

    const addCourse = (course) => {
        const {name, time} = course
        scheduleKeys.filter(key => {
            if (parseInt(key) === time) {
                !schedule[key] && (schedule[key] = name)
            }
            setSchedule({...schedule})
        })
    }

    const deleteCourse = (courseName) => {
        scheduleKeys.filter(key => {
            if (schedule[key] === courseName) {
                schedule[key] = ''
            }
            setSchedule({...schedule})
        })
        console.log(schedule)
    }

    useEffect(() => {
        setSchedule(sampleSchedule)
        setCourses(sampleCourses)
    })

    return (
        <Container className={styles.mainPage}>
            <Schedule schedule={schedule} handleClick={deleteCourse} />
            <Courses courses={courses} handleClick={addCourse} />
        </Container>
    )

}

export default MainPage