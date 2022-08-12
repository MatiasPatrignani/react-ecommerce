import React from 'react'
import '../ErrorPage/ErrorPage.css'

const ErrorPage = () => {
  return (
    <>
    <div className='container'>
        <div className='mt-5 w-50 mx-auto'>
            <div className='text-center pt-5'>
                <h1> ERROR 404 :(</h1>
            </div>
            <div className='error_gif text-center pb-5'>
                <img src='../../img/giphy.webp' alt='' />
            </div>
        </div>
    </div>
    </>
  )
}

export default ErrorPage