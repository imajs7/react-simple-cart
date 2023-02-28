import React, {useReducer} from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { appReducer } from './reducers/appReducer';

const styles = {
  display: 'flex',
  width: '80vw',
  margin: '0 auto'
}


function App() {

  const [state, dispatch] = useReducer(appReducer, {
    products: [],
    cart: []
  });

  return (
    <>
      <div style={{height: '40px', backgroundColor: '#444', color: '#efefef', textAlign: 'center', lineHeight: '40px'}}>CART LOGIC</div>
      <div style={styles}>
        <Products state={state} dispatch={dispatch}/>
        <Cart state={state} dispatch={dispatch}/>
      </div>
    </>
  );
}

export default App;
