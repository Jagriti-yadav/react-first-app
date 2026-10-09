import React from 'react'

function ListInfo() {
  let name = 'John Doe';
  let obj={
    name:"jagriti",
    id:2,
    class:'MCA section C'
  }
  let arr = ['Java','C++','Python','JavaScript','React','NodeJS'];
  // return <h1>Hello World</h1> single line return statement
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is my first React app</p>

      <p>Welcome {obj.name}!</p>
      <p>ID: {obj.id}</p>
      <p>Class: {obj.class}</p>
      <p>Array: {arr.join(', ')}</p>
      <h3> {arr.map((value,index)=> <p key={index}>{index}. {value}</p>)}</h3>
    </div>
  )
}
export default ListInfo;
