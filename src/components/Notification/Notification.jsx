import React from 'react'
import {
    makeStyles,
    Grid,
    Avatar,
    Typography
} from '@material-ui/core'
import { Person } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    grid: {
        width: '400px',
        border: '#a6a8bd solid 2px',
        borderRadius: '10px'
    },
    content: {
        display: 'flex',
        margin: '15px'
    },
}))

const dummyContent = 'Nice analysis. You also have made me think of what we would do if we tried to anticipate a video of personal tech 20 years from now!'

export default function Notification() {
    const classes = useStyles()
    return (

        <Grid className={classes.grid}>
            <div className={classes.content}>
                <Avatar>
                    <Person />
                </Avatar>
                <section style={{ width: '320px', marginLeft: '10px' }}>
                    <Typography>
                        <b>Gregg Vesonder</b> replied to your post
                    </Typography>
                    <Typography>
                        {dummyContent}
                    </Typography>
                    <Typography style={{ color: '#a6a8bd' }}>
                        25 minutes ago
                    </Typography>
                </section>
            </div>
        </Grid>
    )
}