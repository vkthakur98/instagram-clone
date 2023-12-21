import React, { useState } from 'react'
import "../../Css/signup.css"

const Password = () => {
  return (
    <div className='component'>
        <h3>Create a password</h3>
        <span>Create a password with at least 6 letters or numbers.It should be something others can't guess.</span>
      <input placeholder='Password' type='password'/>
    </div>
  )
}

export default Password
