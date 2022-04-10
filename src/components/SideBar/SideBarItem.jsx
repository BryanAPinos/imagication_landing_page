import React from 'react'
import { makeStyles, Container, Typography, Grid, Button } from '@material-ui/core'
import { FiberManualRecord } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    grid: {
        padding: theme.spacing(1)
    },
    icon: {
        marginRight: '8px',
        marginTop: '2px'
    },
    classid: {
        marginTop: theme.spacing(.5)
    },
}))

export default function SideBarItem(props) {
    var classid = props.classid;

    const handleClick = function (event) {
        window.location.href = "/?classid=" + classid;
    }
    const classes = useStyles()
    return (
        <Container>
            <Button
                variant='text'
                startIcon={<FiberManualRecord fontSize='small' 
                style={{color: props.classColor }}/>}
                onClick={handleClick}
            >
                <Grid 
                    container
                    direction='column'
                    justifyContent='flex-start'
                    className={classes.grid}
                >
                    <Grid item>
                        <Typography 
                        variant='h2' 
                        style={{color: props.classColor}}
                        align='left'
                        >
                            {props.class}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography 
                            variant='h3' 
                            style={{color: props.classColor}}
                            align='left'
                            className={classes.classid}
                        >
                            {props.classid}
                        </Typography>
                    </Grid>
                </Grid>
            </Button>
{/*                     <button style={{
                        cursor: 'pointer', background: 'none',
                        border: 'none',
                        padding: '0',
                        color: '#069',
                        textDecoration: 'underline',
                        textAlign: 'left',
                        width: '100%',
                    }}>
                        <Typography variant='h2' style={{ cursor: 'pointer' }}>
                            {props.class}
                        </Typography>
                        <Typography variant='h3' className={classes.classid} style={{ cursor: 'pointer' }}>
                            {props.classid}
                        </Typography>
                    </button> */}
        </Container>
    )
}