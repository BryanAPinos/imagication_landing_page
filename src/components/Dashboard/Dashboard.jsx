import React, { useState } from 'react'
import { makeStyles, 
        Container, 
        Grid, 
        Typography, 
        Root, 
        Divider, 
        Box, 
        Card,
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

        return (
            <div>
                <NavBar />
            </div>
        )

}
