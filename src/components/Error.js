import React from 'react'

const Error = ({message}) => {
  return (
    <div style={{color:"red",padding:"10px"}}>
       Error: {message}
    </div>
  )
}

export default Error