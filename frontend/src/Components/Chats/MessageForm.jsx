import React, { useState } from 'react'
import { sendMessage,isTyping } from 'react-chat-engine'
import { SendOutlined,PictureOutlined,LogoutOutlined } from '@ant-design/icons'
import Swal from 'sweetalert2';
const MessageForm = (props) => {
    const [value,setvalue] =useState('');
    const {chatId ,creds} =props
    const handleSubmit=(event)=>{
        event.preventDefault();
        const text =value.trim();
        if(text.length > 0 )sendMessage(creds,chatId,{text})
        setvalue('');
    }
    const handleChange =(event) =>{
        setvalue(event.target.value);
        isTyping(props,chatId);
    }
    const handleUpload=(event)=>{
        sendMessage(creds,chatId,{files:event.target.files,text:""})
    }
    const handleLogout =()=>{
       
            localStorage.clear();
            Swal.fire({
              title: "Logout successfully",
              icon: "success" 
            }).then(() => {
              window.location.href = "/";
            });
        
    }
  return (
    <form className='message-form' onSubmit={handleSubmit}>
        <input className='message-input'
                placeholder='send a message...'
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
                // style={{marginRight:0}}
         />
    <label htmlFor='upload-button'>
        <span className='image-button'>
            <PictureOutlined className='picture-icon'/>
        </span>
    </label>
    <input type='file'
            multiple={false}
            id="upload-button"
            style={{display:"none"}}
            onChange={handleUpload}
    />
    <button type='submit' className='send-button' >
        <SendOutlined className='send-icon'/>
        </button>
        <button  className='send-button' onClick={handleLogout}style={{marginLeft:"580px"}}>
        <LogoutOutlined   className='send-icon'/>
        </button>
        

    </form>
  )
}

export default MessageForm