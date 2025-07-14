import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const [itemData,changeitems] =useState(


        [
            {"item":"atta","price":"100","product img":"https://www.jiomart.com/images/product/original/491349659/good-life-chakki-atta-5-kg-product-images-o491349659-p491349659-0-202404221630.jpg?im=Resize=(360,360)"},
            {"item":"Rice flour","price":"119","product img":"https://www.jiomart.com/images/product/original/491249738/sri-bhagyalaxmi-rice-flour-1-kg-product-images-o491249738-p491249738-0-202203170745.jpg?im=Resize=(420,420)"},
            {"item":"appam powder","price":"100","product img":"https://www.jiomart.com/images/product/original/491316750/brahmins-appam-idiyappam-podi-1-kg-product-images-o491316750-p491316750-0-202203152257.jpg?im=Resize=(360,360)"},
            {"item":"Banana","price":"75","product img":"https://www.jiomart.com/images/product/original/590000614/banana-nendran-1-kg-product-images-o590000614-p590000614-0-202409271058.jpg?im=Resize=(360,360)"},
            {"item":"Refined Sunflower oil","price":"147","product img":"https://www.jiomart.com/images/product/original/490007389/gold-winner-refined-sunflower-oil-1-l-pouch-product-images-o490007389-p490007389-0-202208221807.jpg?im=Resize=(360,360)"}
        ]


    )
  return (
    <div>

<Navbar/>
<div class="container">
        <div class="row">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">



                <div class="row g-5 p-5">
                    {itemData.map(
                            (value,index)=>{
                                return(



                            <div class="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
                                <div class="card">
                                    <img src={value["product img"]}
                                        class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{value["item"]}</h5>

                                        <p class="card-text">{value["price"]}</p>
                                        <a href="#" class="btn btn-primary">Buy Now</a>
                                    </div>
                                </div>

                            </div>
                                   
                                )
                            }

                    )}
                </div>


            </div>
        </div>
    </div>

    </div>
  )
}

export default View