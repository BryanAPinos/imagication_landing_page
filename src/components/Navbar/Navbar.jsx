import React, { useState } from 'react'
import {
    makeStyles,
    Typography,
    Toolbar,
    Avatar,
    AppBar,
    Tooltip, 
    Button
} from '@material-ui/core'
import { Search, Notifications, Person } from '@material-ui/icons'
import logo from '../Icons/coloredphoenix.png'

const useStyles = makeStyles(theme => ({
    root: {
        zIndex: theme.zIndex.drawer + 1,
    },
    title: {
        marginLeft: '20px',
        cursor: 'pointer'
    },

    search: {
        marginLeft: '60px'
    },
    actions: {
        marginLeft: 'auto'
    }
}))

export default function Navbar() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const goToHome = function () {
        window.location.href = "/";
    }

    const open = Boolean(anchorEl)
    const id = open ? 'notification-popover' : undefined

    return (
        <AppBar postition='fixed' color='inherit' className={classes.root}>
            <Toolbar>
                <Tooltip title="Title">
                    <Avatar src={logo} onClick={goToHome} style={{ cursor: 'pointer' }} />
                </Tooltip>
                <Tooltip title="Title">
                    <Typography variant='h2' className={classes.title} onClick={goToHome}>
                        Imagication
                    </Typography>
                </Tooltip>
                <Tooltip title="Home">
                    <Typography variant='h2' className={classes.title} onClick={goToHome}>
                        Home
                    </Typography>
                </Tooltip>
                <Tooltip title="Our Story">
                    <Typography variant='h2' className={classes.title} onClick={goToHome}>
                        Our Story
                    </Typography>
                </Tooltip>
                <Tooltip title="For Schools">
                    <Typography variant='h2' className={classes.title} onClick={goToHome}>
                        For Schools
                    </Typography>
                </Tooltip>
                <Button variant="contained" color="primary">
                    Explore
                </Button>
            </Toolbar>
        </AppBar>
    )
}