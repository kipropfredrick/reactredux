import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ProductComponent from './productComponent';
import { setProduct } from '../redux/actions/productActions';
const ProductListing=()=>{
    const products=useSelector((state)=>state);
    //products is an array of products and to get individual product we do:
    const dispatch=useDispatch();
    const url="https://fakestoreapi.com/products";
    const fetchProduct= async ()=>{
        const response=await axios.get(url).catch((err)=>{
           console.log(err); 
        });
        dispatch(setProduct(response.data));
    };
    useEffect(()=>{
        fetchProduct();
    },[]);
    console.log(products);
    return(
        <div className="ui grid container">
        <ProductComponent />
      </div>
    )
}
export default ProductListing;