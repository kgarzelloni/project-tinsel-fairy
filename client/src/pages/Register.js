import React from 'react';
import './register.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'


function Register() {
  return (
    <>
      <section className="register">
        <h1>Register</h1>
        <Box
          className='form'
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Username:" variant="outlined" />
          <TextField id="outlined-basic" label="Email:" variant="outlined" />
          <TextField id="outlined-basic" label="Password:" variant="outlined" />
        </Box>
        
        <p>
          Already registered?<br />
          <span className="line">
          <Link to="/login"> Log In </Link>
          </span>
        </p>
      </section>

    </>
  )
}

export default Register;