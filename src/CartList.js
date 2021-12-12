import {useState, useEffect} from 'react';
import strawberry_unsplash from './imgs/strawberry_unsplash.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import Button  from 'react-bootstrap/Button';
import CartItem from './CartItem';

function CartList() {

    const output = [];

    const strawberry_demo = <CartItem name="Organic Strawberries" image={strawberry_unsplash} serving="1.5lb" price="2.25"/>
    return <>
    <div className='container cartItem'>
        <div className='row justify-content-between'>
            <h2 className='col-5'>My Cart</h2>
            <div className='col-5'></div>
            <div className='col-2 text-center'>
            <Button variant="light">Select</Button>
            </div>
        </div>
        {strawberry_demo}
    </div>
    </>
}

export default CartList;