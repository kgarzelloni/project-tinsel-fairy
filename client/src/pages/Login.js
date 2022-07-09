import React from 'react';
import './login.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'


function Login() {
  return (
    <>
      <section className="login">
        <h1>Login</h1>
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
          Not a Member?<br />
          <span className="line">
          <Link to="/register"> Register </Link>
          </span>
        </p>
      </section>
    </>
  )
}

export default Login;