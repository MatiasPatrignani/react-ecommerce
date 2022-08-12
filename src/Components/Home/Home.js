import React, { useEffect, useState } from 'react'
import Body from '../Body/Body'
import "../Home/Home.css"
import rayBanIntro from '../../assets/mp4/rayBanIntro.mp4'
import toast, { Toaster } from 'react-hot-toast';


const Home = ({addWishList, addProduct}) => {

  // const [muteSound, setMuteSound] = useState()




  return (
    <>
    <div className='backGround'>
      <video src={rayBanIntro} autoPlay loop type="video/mp4" />
    </div>
    <Body addWishList={addWishList}  addProduct={addProduct}/>
    <div><Toaster /></div>
    </>
  )
}

export default Home