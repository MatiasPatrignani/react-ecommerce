import React, { useState } from 'react'
import Payment from '../Payment/Payment'

const PageCheckout = () => {
    const [datos, setDatos] = useState({
        firstname: '',
        lastname: '',
        street: '',
        number:'',
        gender: '',
        postalcode: '',
        city:''
    })

    const handleInputChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const sendData = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
    }

return (
    <>
    <div id="all" className='d-flex justify-content-center'>
        <div id="content ">
            <div className="container ">

                <div className="row">

                    <div className="col-md-9 clearfix" id="checkout">

                        <div className="box">
                            <form onSubmit={sendData}  className='needs-validation'>
                                <div className="content">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="firstname">First Name</label>
                                                <input type="text" required className="form-control" id="firstname" name='firstname' onChange={handleInputChange}/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="lastname">Last Name</label>
                                                <input type="text" className="form-control" id="lastname" name='lastname' onChange={handleInputChange} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-sm-4">
                                            <div className="form-group">
                                                <label htmlFor="street">Street</label>
                                                <input type="text" className="form-control" id="street" name='street' onChange={handleInputChange} required/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-2">
                                            <div className="form-group">
                                                <label htmlFor="streetnr">Number</label>
                                                <input type="text" className="form-control" id="zip" name='number' onChange={handleInputChange} required/>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="salutation">Gender</label>
                                                <select type="text" className="form-control" id="gender" name='gender' onChange={handleInputChange} >
                                                <option value="Hombre">Man</option>
                                                <option value="Mujer">Woman</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-2">
                                            <div className="form-group">
                                                <label htmlFor="zip">Postal Code</label>
                                                <input type="text" className="form-control" id="zip" name='postalcode' onChange={handleInputChange}/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="city">City</label>
                                                <input type="text" className="form-control" id="city" name='city' onChange={handleInputChange}/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="country">Country</label>
                                                <select className="form-control" id="country">
                                                    <option value="españa">España</option>
                                                    <option value="francia">Francia</option>
                                                    <option value="portugal">Portugal</option>
                                                    <option value="italia">Italia</option>
                                                    <option value="alemania">Alemania</option>
                                                    <option value="usa">USA</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone</label>
                                                <input type="text" className="form-control" id="phone"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input type="text" className="form-control" id="email"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PageCheckout