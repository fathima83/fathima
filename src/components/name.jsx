import { Button, Input } from '@mui/material'
import React, { useEffect, useState } from 'react'

const name = () => {
    var[a,seta]=useState()

    const inpt1=()=>{
        seta("react")
    }

    const inpt2=()=>{
        seta("angular")
    }

    const inpt3=()=>{
        seta("python")
    }

    useEffect(()=>{
        inpt2()
    },{})

  return (
    <div>
        <br /><br /><br /><br />
        <h2>welcome {a}</h2>
        <br /><br /><br /><br /> 
        <Button variant='contained' color='error'onClick={Inpt1}>react</Button>
        &nbsp;&nbsp;

        <Button variant='contained' color='secondary'onClick={inpt2}>angular</Button>
        &nbsp;&nbsp;

        <Button variant='contained' color='succeess'onClick={inpt3}>python</Button>
        </div>
  )
}

export default name