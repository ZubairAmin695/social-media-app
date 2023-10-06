import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className="signup">
    <div className="card">
      <div className="left">
      <h2>-<br/>NapaExtra <br/>-</h2>
       
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
          officia est labore? Pariatur numquam veniam itaque atque magni qui
          maxime ipsum?
        </p>

        <span>Already have An Account!</span>
        <Link to='/login'>
        <button className="btn btn-primary">Login</button>
        </Link>
     
      </div>

      <form className="right">
        <input type="text" required placeholder="User Name" />
        <input type="email" required placeholder="Email" />
        <input type="password" required placeholder="Password" />
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  </div>
  )
}

export default Signup