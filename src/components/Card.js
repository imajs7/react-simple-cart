import React from 'react'

const Card = ({product, state, dispatch}) => {
    
  return (
    <div>
        <div style={{width: '200px', border: '1px solid #999', padding: '8px'}}>
            <img src={product.image} alt={product.title} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
            <div>
                <h6>{product.title}</h6>
                <h4>${product.price}</h4>
            </div>

            {
                state.cart.some( item => item.id === product.id ) ? (
                    <button
                        onClick={() => dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: {
                                id: product.id
                            }
                        })}
                    >Remove From Cart</button>
                ) : (
                    <button
                        onClick={() => dispatch({
                            type: 'ADD_TO_CART',
                            payload: {
                                id: product.id,
                                title: product.title,
                                price: product.price,
                                image: product.image,
                                quantity: 1
                            }
                        })}
                    >Add To Cart</button>
                )
            }
                        
        </div>
    </div>
  )
}

export default Card