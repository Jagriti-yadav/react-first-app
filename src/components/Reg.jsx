import React,{useState} from "react";

const Reg = () => {

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
    age:"",
    dob:"",
    gender:"",
    course:"",
    skills:[],
    country:"",
    address:"",
    website:"",
    time:"",
    color:"#000000",
    experience:"",
    terms:false,
    photo:null,
  });

  //handling textboxes, radio, select, textarea, checkboxes, files
  const handleChange = (e)=>{
    const {name, value, type, checked, files} = e.target;

    if(type === "checkbox" && name === "terms"){
      setFormData({
        ...formData,
        [name]:checked,
      })
    }else if(type === "file"){
      setFormData({
        ...formData,
        [name]:files[0],
      })
    }else{
      setFormData({
        ...formData,
        [name]:value,
      })
    }
  }
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center bg-warning p-2 mb-4">Registration form</h2>
        <form>

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input 
              type="text"
              name="name"
              value={formData.name} 
              className="form-control"
              placeholder="Enter your name"
              onChange={handleChange}
              required/>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
              type="email"
              name="email" 
              value={formData.email}
              className="form-control"
              placeholder="Enter your email"
              onChange={handleChange}
              required/>
          </div>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input 
              type="password"
              name="password" 
              value={formData.password}
              className="form-control"
              placeholder="Enter your password"
              onChange={handleChange}
              required/>
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input 
              type="number"
              name="age"
              min="18"
              max="100"
              className="form-control"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
              required/>
          </div>

          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input type="date"
            name="dob"
            className="form-control"
            value={formData.dob}
            onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label d-block">Gender</label>

            <div className="form-check form-check-inline">
              <input 
                type="radio"
                name="gender"
                value="Male"
                className="form-check-input"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                />
                <label className="form-check-label">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input 
                type="radio"
                name="gender"
                value="Female"
                className="form-check-input"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                />
                <label className="form-check-label">Female</label>
            </div>
            <div className="form-check form-check-inline">
              <input 
                type="radio"
                name="gender"
                value="Other"
                className="form-check-input"
                checked={formData.gender === "Other"}
                onChange={handleChange}
                />
                <label className="form-check-label">Other</label>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Course</label>

            <select
              name="course"
              className="form-select"
              value={formData.course}
              onChange={handleChange}
              >
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
                <option value="Node">Node</option>
                <option value="MongoDB">MongoDB</option>
              </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Skills</label>

            <div className="form-check">
              <input
              type="checkbox"
              name="skills"
              value="HTML"
              className="form-check-input"
              />
              <label className="form-check-label">HTML</label>
            </div>
            <div className="form-check">
              <input 
              type="checkbox"
              name="skills"
              value="CSS"
              className="form-check-input"
              />
              <label className="form-check-label">CSS</label>
            </div>

            <div className="form-check">
              <input
              type="checkbox"
              name="skills"
              value="Javascript"
              className="form-check-input"
              />
              <label className="form-check-label">Javascript</label>
              
            </div>
          </div>

          

        </form>
      </div>
    </div>
  )
}
export default Reg;