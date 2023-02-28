import React, {useEffect, useState} from 'react'

const Cart = ({state, dispatch}) => {
    const [total, setTotal] = useState(0);

    const calculateTotal = () => {
        const reducedSum = state.cart.reduce( (acc, cur) => acc + Number(cur.price) * cur.quantity, 0 );
        setTotal( reducedSum );
    }

    const changeQty = (id, qty) => {
        dispatch({
            type: 'CHANGE_QTY',
            payload: {
                id,
                qty
            }
        });
    }

    useEffect(
        () => {
            calculateTotal();
        }, [state]
    );

  return (
    <div style={{flexBasis: '30%', backgroundColor: '#ccc'}}>
        <h3 style={{padding: '8px', textAlign: 'center'}}>Cart ({state.cart.length})</h3>
        <h4 style={{padding: '8px', textAlign: 'center'}}>Sub Total : ${total}</h4>
        <div style={{padding: '8px'}}>
            {
                state.cart.map( (item) => (
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBlock: '5px', border: '1px solid #777'}}>
                        <div style={{width: '20%'}}>
                            <img src={item.image} alt={item.title} style={{width: '60px', height: '60px', objectFit: 'cover'}} />
                        </div>
                        <div style={{width: '80%', padding: '5px'}}>
                            <div>{item.title}</div>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <div>${item.price}</div>
                                <div>
                                    <button
                                        onClick={() => changeQty(item.id, item.quantity - 1)}
                                    >-</button>
                                    {item.quantity}
                                    <button
                                        onClick={() => changeQty(item.id, item.quantity + 1)}
                                    >+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) )
            }
        </div>
        
    </div>
  )
}

export default Cart