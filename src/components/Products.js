import React, { useEffect } from 'react';
import axios from 'axios';
import Card from './Card';


const PRODUCT_LINK = 'https://fakestoreapi.com/products';

const Products = ({state, dispatch}) => {

    const fetchProducts = async () => {
        const {data} = await axios.get( PRODUCT_LINK );
        
        dispatch({
            type: 'ADD_PRODUCTS',
            payload: data
        });
    }

    useEffect(
        () => {
            fetchProducts();
        }, []
    );

  return (
    <div style={{flexBasis: '70%'}}>
        <h3>Products</h3>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
        {
            state.products.length && state.products.map( (product, idx) => (
                <Card key={idx} product={product} state={state} dispatch={dispatch}/>
            ))
        }
        </div>
        
    </div>
  )
}

export default Products