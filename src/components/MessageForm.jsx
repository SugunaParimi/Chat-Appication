import React, { useState } from 'react';
import {sendMessage, isTyping} from 'react-chat-engine'
import ChatId from './chatId';
function MessageForm() {
    const [value, setValue]=useState('');
    const {chatId, creds}=props;
    const handleSubmit=(event)=>
    {
      event.preventDefault();
      const text = value.trim();
      if(text.length>0)
      sendMessage(creds, chatId, {text});
    }
    const handleChange=(event)=>{
     setValue(event.target.value);
     isTyping(props, ChatId);
    }
  return (
      <form  className='message-form' onSubmit={handleSubmit()}>
          <input
          className='message-input'
          placeholder='Send a message...'
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
              />
      </form>
  )
}

export default MessageForm;
