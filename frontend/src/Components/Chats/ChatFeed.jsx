import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed=(props)=>{
    const {chats,activeChat,userName,messages} =props;  
    const chat =chats && chats[activeChat]

    const renderReadReceipts = (message , isMyMesaage) =>{
        chat.people.map((person ,index) => person.last_read === message.id && (
            <div
                key ={`read_${index}`}
                className="read-receipt"
                style={{
                    float:isMyMesaage ? 'right':'left',
                    backgroundImage :`url(${person?.person?.avatar})`
                }}
            />
        ))
    }
    const renderMessage =()=>{
        const keys = Object.keys(messages);
        
        return keys.map((key,index)=>{
            const message =messages[key];
            const lastMessagekey =index === 0?null:keys[index-1];
            const isMyMesaage = userName ===message?.sender?.username;
            return(
                <div key={`msg_${index}`} style={{width:"100%"}}>
                    <div className="message-block">
                        {
                            isMyMesaage?<MyMessage message ={message}></MyMessage> : <TheirMessage message ={message} lastMessage={lastMessagekey}></TheirMessage>
                        }
                    </div>
                    <div className="read-receipts" style={{marginRight:isMyMesaage ? '18px' :"0px" ,marginLeft: isMyMesaage ?'0px': "68px"}}>
                        {renderReadReceipts(message,isMyMesaage)}
                    </div>
                </div>
            )
        })
    }
  

    if(!chat) return 'Loading .....'
    return(
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person)=>`${person.person.userName}`)}
                </div>
            </div>
            {renderMessage()}
            <div style={{height:'100px'}}></div>
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat}/>
            </div>

        </div>
    );
}
export default ChatFeed;

