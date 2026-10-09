// import React from "react";
// import Header from "./components/header/Header";
// import Body from "./components/body/Body";
// import Footer from "./components/footer/Footer";
// import ChildrenExample from "./components/ChildrenExample";
// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <Body/>
//       <Footer/>
//       <div className='children'>
//         <ChildrenExample info={"children component"}>
//           <p>"hello this is a child component"</p>
//         </ChildrenExample>
//       </div>

//     </div>
//   )
// }

// import { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     age: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(formData);
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card shadow">
//             <div className="card-body">
//               <h2 className="text-center mb-4">Registration Form</h2>

//               <form onSubmit={handleSubmit}>
//                 {/* Name */}
//                 <div className="mb-3">
//                   <label className="form-label">Name</label>

//                   <input
//                     type="text"
//                     name="name"
//                     className="form-control"
//                     placeholder="Enter your name"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 {/* Email */}
//                 <div className="mb-3">
//                   <label className="form-label">Email</label>

//                   <input
//                     type="email"
//                     name="email"
//                     className="form-control"
//                     placeholder="Enter your email"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 {/* Password */}
//                 <div className="mb-3">
//                   <label className="form-label">Password</label>

//                   <input
//                     type="password"
//                     name="password"
//                     className="form-control"
//                     placeholder="Enter your password"
//                     value={formData.password}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 {/* Age */}
//                 <div className="mb-3">
//                   <label className="form-label">Age</label>

//                   <input
//                     type="number"
//                     name="age"
//                     className="form-control"
//                     placeholder="Enter your age"
//                     value={formData.age}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 {/* Date of Birth */}
//                 <div className="mb-3">
//                   <label className="form-label">Date of Birth</label>

//                   <input
//                     type="date"
//                     name="dob"
//                     className="form-control"
//                     placeholder="Enter your date of birth"
//                     value={formData.dob}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 {/* Gender */}
//                 <div className="mb-3">
//                   <label className="form-label">Gender</label>

//                   <select name="gender">
//                     <option value="">Select Gender</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>

//                 {/* Submit */}
//                 <button type="submit" className="btn btn-primary w-100">
//                   Register
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import Footer from './components/footer/Footer.jsx'
// import Header from './components/header/Header.jsx'
// import Body from './components/body/Body.jsx'
// import { Routes, Route } from 'react-router-dom'
// import Product from './components/Product.jsx'
// import Error404 from './components/Error404.jsx'

// const App = () => {
//   return (
//     <div className="container">
//       <Header />

//       <Routes>
//         <Route path="/" element={<Body />} />
//         <Route path="/body" element={<Body />} />
//         <Route path="/product/:id" element={<Product />} />
//         <Route path="*" element={<Error404 />} />
//       </Routes>

//       <Footer />
//     </div>
//   )
// }

// export default App

// import React from "react";

import Body from "./components/body/Body";
import Reg from "./components/Reg";
import UseffectExample from "./components/UseffectExample";

    //<div>
    //   <Body/>
    //   <Reg/>
    //   <UseffectExample />
    // </div>
  


import { React, useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;