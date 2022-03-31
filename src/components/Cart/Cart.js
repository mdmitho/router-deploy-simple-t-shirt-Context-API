import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    let command ;
   if(cart.length === 0){
command = <div>
     <h5>Please Add Some Items!!!</h5>
</div>
}
else if(cart.length===1){
command = <p>Please add more ...</p>
}

else {
    command = <p> <small> Thanks for adding item</small></p>
}
    return (
        <div>
            <h1>Items Selected : {cart.length}</h1>


            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button className='delete-btn' onClick={()=>handleRemoveFromCart(tShirt)}>X</button>
                    </p>)
            }
            {cart.length ===0 || <p className='orang'> YAY! You are buying</p>}
            {cart.length ===3 && <div className='orang'>
            <h3>Trigonal</h3>
            <p>Tin jon ke ki gift deba hmm</p>
            </div> }
            {command}
            {cart.length !==4 ? <p>Keep adding</p> : <button>Remove All</button>}
            {cart.length ===5 && <button className='orang'>Review Order</button>}
        </div>
    );
};
 
export default Cart;