import { makeStyles } from "@material-ui/core/styles";


export default makeStyles(() => ({
    mainPage: {
        display: 'flex',
    },
    appBar: {
    backgroundColor: '#444054',
    display: 'flex',
    // height: '50px',
    alignItems: 'center',
  }, 
    courseContainer: {
        borderLeft: '1px solid black',
        height: '80%',
        marginTop: '80px',
        width: '60%',
    },
    course: {
        borderBottom: '1px solid black'
    },
    schedule: {
        height: '80%',
        marginTop: '80px',
        width: '40%',
    },
    scheduleContainer: {
        border: '1px, solid, black',
        // display: 'flex',
        // flexDirection: 'column'
    }
}))