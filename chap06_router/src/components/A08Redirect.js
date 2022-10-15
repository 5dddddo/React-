import React from 'react'
import { Navigate } from 'react-router';

function A08Redirect() {
  const isChecked = false;

  if(!isChecked) { 
    return <Navigate to="/" replace={true}></Navigate>
  }

  return (
    <div>
      <h1>A08Redirect</h1>
    </div>
  )
}

export default A08Redirect