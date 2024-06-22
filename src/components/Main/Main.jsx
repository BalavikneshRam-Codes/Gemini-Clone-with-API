import React, { useContext, useEffect } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
export default function Main() {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);


  return (
    <div className='main'>
      <div className="nav">
        <a href="https://gemini.google.com/app?hl=en-IN" target='_blank'><p>Gemini</p></a>
        <a href="https://github.com/BalavikneshRam-Codes" target='_blank'><img src={assets.user_icon} alt="" /></a>
      </div>

      <div className="main-container">
        {!showResult
        ?<>
         <div className='greet'>
          <p><span>Hello,Dev</span></p>
          <p>How can I help today?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Suggest beautiful place to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Breify summarize this conecpt : urbar planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activites for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Explain the following code step-by-step in detail</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        </>
        :<div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading
            ? <div className='loader'>
                  <hr />
                  <hr />
                  <hr />
            </div>
            : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
          }
          </div>
        </div>
        }

        <div className="main-bottom">
          <div className="searchbox">
            <input type="text" placeholder='Enter a Prompt here' onChange={(e)=>setInput(e.target.value)} value={input}/>
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img src={assets.send_icon} alt="" onClick={()=>onSent()} />:null}
            </div>
          </div>

          <p className="bottom-info">
          Gemini may display inaccurate info, including about people, so double-check its responses. <a href="https://support.google.com/gemini/answer/13594961?visit_id=638540271349224522-4238085888&p=privacy_notice&rd=1#privacy_notice"><span>Your privacy and Gemini Apps</span> </a>
          </p>
        </div>
      </div>
    </div>  
  )
}
