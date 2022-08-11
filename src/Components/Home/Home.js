import React from 'react'
import Body from '../Body/Body'
import "../Home/Home.css"
import rayBanIntro from '../../assets/mp4/rayBanIntro.mp4'


const Home = ({addWishList, addProduct}) => {
  return (
    <>
    <div className='backGround'>
      <video src={rayBanIntro} autoPlay muted loop type="video/mp4" />
    </div>
    <Body addWishList={addWishList}  addProduct={addProduct}/>
    </>
  )
}

export default Home