import React from 'react'
import Swal from 'sweetalert2';
const Logout = () => {
  localStorage.clear();
  if (1===1) {
    Swal.fire({
      title: "Logout Successfully",
      
      icon: "success"
    }).then(() => {
      
      window.location.href = "/login"
    })
  }
  return (
    <div></div>
  )
}

export default Logout