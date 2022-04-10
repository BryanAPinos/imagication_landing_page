import React, { useState } from 'react'
import { makeStyles, 
        Container, 
        Toolbar, 
        Fab, 
        Typography,
        Dialog,
        DialogTitle, 
        Tooltip,
        Grid
    } from '@material-ui/core'
import NavBar from '../Navbar/Navbar'

const useStyles = makeStyles( theme => ({
    root: {
        maxWidth: 'lg',
        backgroundColor: theme.palette.background,
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background,
        padding: theme.spacing(3),
      },
    post: {
        padding: theme.spacing(2), 
        margin: theme.spacing(2),
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(15),
        right: theme.spacing(10),
      },
      fabIcon: {
          marginRight: theme.spacing(.5)
      }
  }))


export default function Dashboard() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        setIsOpen(true)
    }

    const handleClose = () => {
        setAnchorEl(null)
        setIsOpen(false)
    }


    const open = Boolean(anchorEl)  
    const id = open ? 'simple-popover' : undefined  

        return (
            <Container className={classes.root}>
                <NavBar />
            </Container>
        )

}
