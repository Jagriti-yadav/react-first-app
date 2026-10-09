import React from 'react'

const ChildrenExample = (props) => {
  const [info,children] = props;
  return (
    <div>
      
      <p>{info}</p>
      {children}
    </div>
  )
}

export default ChildrenExample;
