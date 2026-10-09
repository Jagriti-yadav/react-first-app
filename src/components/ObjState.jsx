import React, {useState} from 'react'

const App = () => {

  let initName = {
    id: 1,
    name: "John Doe"
  }
const [nameObj , setName] = useState(initName);
  function handleClick(){
    alert("click me");
  }
 
  
  function changeName(newName){
    setName({...nameObj, name: newName});
    name = newName;
  }
  return (
    <div>
      <button onClick={handleClick}>Click Me</button><br/>
      <button onClick={()=>alert("click me")}>Click Me</button>


      <h3>name : {name}</h3>
      <button onClick={()=>changeName("Ananya")}>Ananya</button>
    </div>
  )
}

export default App;
