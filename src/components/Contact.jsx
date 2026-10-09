import React from 'react'
import { useNavigate} from 'react-router-dom'
const Contact = () => {
  const navigate = useNavigate()
  return (
    <div className='d-flex,flex-column jusitgy-content-center align-items-center'>
      <h2>programmatically navigation in treact.js
        <button className="btn btn-primary" onClick={() => navigate(-1)}>Back</button>
        <button className="btn btn-primary" onClick={() => navigate('/',{replace:true})}>home</button>
        <button className="btn btn-primary" onClick={() => navigate('')}>forward</button>
      </h2>
    </div>
  )
}

export default Contact
