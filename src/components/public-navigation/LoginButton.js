import React from "react";
import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <Link to='/login' className="btn-login">
      <button className='btn transparent'>Login</button>
    </Link>
  )
}

export default LoginButton;