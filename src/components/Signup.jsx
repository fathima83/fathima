import { Button , TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div><br /><br /><br /><br />
        <TextField label="name" variant='outlined'/><br/>
        <TextField label="age" variant='outlined'/><br/>
        <TextField label="dept" variant='outlined'/><br/>
        <Button variant="contained">Contained</Button>   
         </div>
  )
}

export default Signup