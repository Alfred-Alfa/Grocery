import React from 'react'
import Navbar from './Navbar'

const AddGroce = () => {
  return (
    <div>
        <Navbar/>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">



                <div className="row p-5 g-5">
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Name:</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Quantity:</label>
                        <input type="number" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                       
                        <label htmlFor="" className="form-label">Category:</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        
                        <label htmlFor="" className="form-label">Expiry Date:</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        
                        <label htmlFor="" className="form-label">Price:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">image Photo:</label>
                        <input type="file" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success">Submit</button>
                    </div>
                </div>





            </div>
        </div>
    </div>

    </div>
  )
}

export default AddGroce