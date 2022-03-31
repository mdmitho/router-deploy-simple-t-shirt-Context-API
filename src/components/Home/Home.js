import React from 'react';
import Cart from '../Cart/Cart'
import useTShirts from '../Hooks/useTShirts';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tshirts,setTShirts] = useTShirts()
    return (
        <div className='home-container'>
            <div className="tshirt-container">
             {
                 tshirts.map(tShirt => <TShirt
                 key={tShirt._id}
                 tShirt={tShirt}

                 ></TShirt>)
             }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;