import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import "./Sidebar.css"
import { Context } from '../../context/context';
export default function 
() {

      const [extended,setExtended] = useState(false);
      const {onSent,prevPrompt,setRecentPrompt,newChat} = useContext(Context);

      const loadPrompt = async (prompt) =>{
        setRecentPrompt(prompt)
        await onSent(prompt)
      }
  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={()=>setExtended(prev=> !prev)} src={assets.menu_icon} alt="" className='menu'/>
              <div onClick={()=>newChat()} className="newchat">
                <img src={assets.plus_icon} alt="" />
                {extended ? <p>New Chat</p> : null}
              </div>
              {extended ?             
              <div className='recent'>
              <p className='recent-title'>Recent</p>
              {prevPrompt.map((item,index)=>{
                  return(
                    <div onClick={()=>loadPrompt(item)} className='recent-entry' key={index}>
                    <img src={assets.message_icon} alt="" />
                    <p>{item.slice(0,18)}...</p>
                  </div>
                  )
              })}

            </div> 
            : null}
           
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
            <a href="https://www.linkedin.com/in/balaviknesh-ram/" target='_blank'><img src={assets.question_icon} alt=""/></a>
              {extended ? <a href="https://www.linkedin.com/in/balaviknesh-ram/" target='_blank'><p>Help</p></a> : null}
            </div>
            <div className="bottom-item recent-entry">
              <img src={assets.history_icon} alt=""/>
              {extended ? <p>Activity</p> : null}
            </div>
            <div className="bottom-item recent-entry">
              
              <img src={assets.setting_icon} alt=""/>
              {extended ? <p>Settings</p> : null}
            </div>
        </div>
    </div>
  )
}
