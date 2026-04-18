import { AppBar , Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link, Links } from 'react-router'

const NabBar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <h3>Myapp</h3> &nbsp;
                <Link to="/login">
                <Button variant='contained' color='success'>login</Button>
                </Link> &nbsp;

                <Link to="/s">
                <Button variant='contained' color='success'>signup</Button>
                </Link> &nbsp;

                <Link to="/state">
                <Button variant='contained' color='success'>StateBasics</Button>
                </Link> &nbsp;

                <Link to="/name">
                <Button variant='contained' color='success'>name</Button>
                </Link> &nbsp;

                <Link to="/api">
                <Button variant='contained' color='success'>api</Button>
                </Link> &nbsp;
            </Toolbar>
        </AppBar>
        </div>
  )
}

export default NabBar
