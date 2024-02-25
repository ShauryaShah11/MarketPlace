import React from 'react'
import Swal from 'sweetalert2';
const Logout = () => {
  localStorage.clear();
  Swal.fire({
        title: "Logout successfully",
        // text: "That thing is still around?",
        icon: "success" 
      }).then(()=>[
      
        window.location.href="/login"
      ]);
  return (
    <div></div>
  )
}

export default Logout