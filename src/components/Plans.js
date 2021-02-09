import React, { useEffect, useState } from 'react'
import db from '../firebase'
import "./Plans.css"

function Plans() {
    const[prods,setProds]=useState([])

    useEffect(()=>{
        db.collection('products')
        .where('active','==',true)
        .get().then(querySnapshot =>  {
            const products = {};
            querySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection('prices').get();
                priceSnap.docs.forEach(price=>{
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData : price.data()
                    }
                })
            })
            setProds(products)
        }) 
    },[])
    console.log(prods);

    return (
        <div className="plans">
            {Object.entries(prods).map(([productId,productData])=>{
                return(
                    <div className="plans__plan">
                        <div className="plans__info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button>Subscribe</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Plans
