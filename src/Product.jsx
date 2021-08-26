import React from 'react'
import { NavLink } from 'react-router-dom'

const Product = ({imgSrc,title1,title2,para}) => {
    return (
        <>
            <div className="product">
                <img src={imgSrc} alt="" />
                <NavLink to="/" className="product1">{title1}</NavLink>
                <NavLink to="/" className="product2">{title2}</NavLink>
                <NavLink to="/" className="product3">{para}</NavLink>
            </div>
        </>
    )
}

export default Product
