import React from 'react'

const Courses = () => {
  return (
    <div>
      <h2> select your course</h2>
      <nav>
        <NavLink to="/offline"  className="m-3"> Offline Course</NavLink>
        <Navlink to="/online">Online Course</Navlink>
      </nav>
      <Outlet>
      </Outlet>
    </div>
  )
}

export default Courses
