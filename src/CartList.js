import {useState, useEffect} from 'react';
import strawberry_unsplash from './imgs/strawberry_unsplash.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import Button  from 'react-bootstrap/Button';
import CartItem from './CartItem';

function CartList() {
    const strawberry_demo = <CartItem key="0" name="Organic Strawberries" image={strawberry_unsplash} serving="1.5lb" price="2.25" onDelete={() => deleteItem(0)}/>
    const strawberry_demo2 = <CartItem key="1" name="Rural Strawberries" image={strawberry_unsplash} serving="1.5lb" price="2.25" onDelete={() => deleteItem(1)}/>
    const strawberry_demo3 = <CartItem key="2" name="Natural Strawberries" image={strawberry_unsplash} serving="1.5lb" price="2.25" onDelete={() => deleteItem(2)}/>

    const [output, SetOutput] = useState([strawberry_demo, strawberry_demo2, strawberry_demo3]);
    const num_items = output.length;

    // for(let i = 0; i < output.length; i++) {
    //     const item_name = output[i];
    //     const idx = i;
    //     const cartItem = <CartItem key={idx} name={item_name} image={strawberry_unsplash} serving="1.5lb" price="2.25" onDelete={() => deleteItem({idx})} />
    //     cart_items.push(cartItem);
    // }

    function deleteItem(idx){
        const items = output;
        console.log(items);
        const new_output = items.splice(idx, 1);
        SetOutput(new_output);
    }

    return <>
    <div className='container cartItem'>
        <div className='row justify-content-between'>
            <h2 className='col-5'>My Cart</h2>
            <div className='col-5'></div>
            <div className='col-2 text-center'>
            <Button variant="light">Select</Button>
            </div>
        </div>
        {output}
    </div>
    </>
}

export default CartList;