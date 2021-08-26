import React from 'react';
import { NavLink } from 'react-router-dom';
import Product from './Product';
import product1 from "./images/product1.webp";
import product2 from "./images/product2.webp";
import product3 from "./images/product3.webp";
import product4 from "./images/product4.webp";

const FeaturedProduct = () => {
    return (
        <>
            <div className="featured-products">
                <div className="feature">
                    <h1>Featured Products</h1>
                    <NavLink to="/" className="shop">Shop All</NavLink>
                </div>
                <div className="featured-product">
                    <Product
                       imgSrc={product1} 
                       title1="Essential for Women"
                       title2="Multivitamin 18+"
                       para="The clinical-backed multivitamin, reimagined for women 18+."
                    />
                       <Product
                       imgSrc={product2} 
                       title1="Essential for Women"
                       title2="Prenatal Multivitamin "
                       para="The prenatal multivitamin for thinking, trying, and when it's time."
                    />
                       <Product
                       imgSrc={product3} 
                       title1="Essential Protein"
                       title2="Daily Shake 18+"
                       para="The reimagined plant-based protein for adults 18-49."
                    />
                       <Product
                       imgSrc={product4} 
                       title1="Essential for Men"
                       title2="Multivitamin 18+"
                       para="Formulated for men 18-49 to help fill nutrient gaps in their diet.*"
                    />
                </div>
            </div>
        </>
    )
}

export default FeaturedProduct
