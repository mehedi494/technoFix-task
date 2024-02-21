/* eslint-disable react/prop-types */


export default function Button({actionName}) {
  return (
    <button style={{width:"100px",height:"30px" ,borderRadius:"5px",padding:"2px 5px"}}>{actionName}</button>
  )
}
