import React from 'react';
import useProducts from '../hooks/hooksProduct';
import useCart from '../useCart/useCart';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemove = key => {
            const newCart = cart.filter(product => product.key !== key);
           setCart(newCart);
           removeFromDb(key);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem 
                        product={product}
                        handleRemove = {handleRemove}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart ={cart}></Cart>
            </div>
            
        </div>
    );
};

export default OrderReview;