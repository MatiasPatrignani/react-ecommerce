import React from 'react'
import '../ThankYouPage/ThankYouPage.css'
import imgSuccess from '../../assets/img/img_successful2.png'
import { useNavigate } from 'react-router-dom'

const ThankYouPage = () => {
  const goHome = useNavigate()

  return (
    <>
    <div className='backGroundMenu bg-white w-100 '></div>
    <div className='BackGroundImg'>
      <div className='d-flex justify-content-center'>
      <div className='d-flex justify-content-center pt-5'>
        <div className='flex-column w-100 pt-5'>
          <div className='d-flex justify-content-center'><img src={imgSuccess} alt='imageSuccess' className='imageSuccess' /></div>
          <h1 className='mt-5 pt-5 text-white text-uppercase'>Thank for you purchase!! </h1>
          <div className='d-flex justify-content-center'><button className='btn btn-dark' onClick={()=> goHome('/')}><img className='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAnpJREFUSEuVl3+dEzEQxb9xUAcgoQ6uKAAHbB2AgjsUgIP2HODgeg6QAA7qIHwmyW4mmcnudv9rMpk3P968pCEAkf4rq/5mMV7dNB7bhYCc7tdqJMa3DmgPsLYRsFiS7ICT2Ya/uh0miHfg90Z6y3YbhiwbxBbdiWWCcCmlOQPXCj6OXAU9KvUq8ETg0hGjA5/DGHNF9diJ1C6dgDdb2mT4CbiNCdNyckAuJ9LAkchbgEOegkKWanqPIOB/yrYZF91RC+wz5VgyPWwQSchWwZvg2onIwCWUSnftPhwgSnmPxdDFVl2RjAVcgsiunRNbGUuGBXSQq++5Ae+olnNdiygmsoQnP+ZNGgnRJPM27aW67ngn22uEr/2YP6hX1wDnRpRUq1voHNEVYgJ9/DMaIAmcl7RXgCcil4ZeiiBG5IyhIz6BMxHJfiFaT64JMqgp6Ya+7LA/l/YtbZ8l5ZTGZoeHpvxOCVZ4sKibZvU34OcMvEqivmajQbXr34Ffc0V1XQU8qVOAKcKHnlyr42c3/9XyhjvEBFqBfSbJHD49zurmxDsgF4v5cqn9vt4IPPV61wu9V2WFYoGtgBiBuUWdsdb4fSMkszPOuPrQb6K06mYMvLYvjmQrY+gJTgY2QXtvrhrJqMc/gJeuafL7ubnlcknfA/HkvePs7VSja0tdkTaB1aWyr9T6Fgpwi4VcHQFd4ADPTmZ7gNviJeBCLgMceOnYnkttv0GPM5FHn7yXP8/DrsbGe1E2qqcI+xqIIkTmUs7A/jB/BL7MSpadJfW5Erh3GYvaia2c0XIv7+2/5az6JzHMeFWpPR1qXlbbp4N++mybuz15ULxnH/8B5ZsCN6kSzd0AAAAASUVORK5CYII="/> HOME</button></div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default ThankYouPage