<<<<<<< HEAD
import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br />Food Delivery App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    )
}

export default AppDownload
=======
import React from 'react'
import './AppDownload.css'
import assets from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download<br/>TastyGo App</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="playstore" />
        <img src={assets.app_store} alt="appstore" />
      </div>
    </div>
  )
}

export default AppDownload
>>>>>>> 654e5f637d09ea247cc9544d678011ed88cca846
