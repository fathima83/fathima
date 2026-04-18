import { Button,TextField } from "@mui/material"
import React,{ useState } from 'react'

const statebasics= () => {

    var[a,setname]=useState("fathima")
    var[a,seta]=useState()

const inputHandler =(e)=>{
console.log(e.target.value)
setname(e.target.value)
}
 
const submitHandler=()=>{
seta(name)
}


  return (
    <div>
        <br /><br /><br /><br />
        <h1>welcome {name}</h1>
       <TextField label="enter your name" variant='outlined' onChange={inputHandler}/>
       <br /><br />
       <Button variant='contained' onClick={submitHandler}>submit</Button>
    </div>
  )
}

export default statebasics