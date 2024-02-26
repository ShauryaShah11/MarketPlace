import React from 'react'
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './ChatFeed';
const Chats = () => {
  return (
    
    <ChatEngine
    height="100vh"
    projectID="8b52ea55-0efc-4911-8b36-ae47ff286446"
    // userName={localStorage.getItem('username')}
    // userSecret={localStorage.getItem('password')}
    userName="Shubham"
    userSecret="123456"
    renderChatFeed ={(chatAppProps)=><ChatFeed {...chatAppProps}></ChatFeed>}
  />
  )
}

export default Chats