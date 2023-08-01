import React,{useState} from 'react'
import chatbot from '../../Assert/chatbot.png'
import '../../Styles/Home.css'
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
const UserChat = () => {

  const [showChat, setshowChat] = useState(false  )

  const handleChatpopup = () => {
    setshowChat((prevState) => !prevState)
  }
  return (
    <>
      <div className = "chatbot" onClick = {handleChatpopup}>
      <img width = {60} height = {55} style = {{borderRadius : "50%"}} src = {chatbot}/>
      </div>
      {showChat && <div className = "chatwrapper">
        <div className = "chatheader">
          <div className = "Header">Header
          <div className = "close-icon" onClick = {() => setshowChat(false)}><CloseIcon/></div>
          </div>

          <div className = "chat-body">
          <div class="chat-container">
	<ul class="chat">
		<li class="message left">
			<img class="logo" src="https://randomuser.me/api/portraits/women/17.jpg" alt=""/>
			<p>I'm hungry!</p>
		</li>
		<li class="message right">
			<img class="logo" src="https://randomuser.me/api/portraits/men/67.jpg" alt=""/>
			<p>Hi hungry, nice to meet you. I'm Dad.</p>
		</li>
		<li class="message left">
			<img class="logo" src="https://randomuser.me/api/portraits/women/17.jpg" alt=""/>
			<p>DAD! I'm serious!</p>
		</li>
		
	</ul>

</div>
          </div>
          <div className = "chat-footer">
            
            <input className = "chat-input" placeholder='Enter message here '/>
           <SendIcon style = {{color : '#1976d2'}}/>
          </div>

        
          </div>
      </div>  }
      
    </>
  )
}

export default UserChat
