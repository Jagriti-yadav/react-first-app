import React from 'react'

const Registration = () => {
  return (
    <div>
      <h2 className="bg-primary text-black text-center mt-4">Registration</h2>
      <form>
        <input type="text" name="user" placeholder="Enter username"></input>
        <input type="password" name="password" placeholder="Enter password"></input>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Registration
