import React,{createContext, useState, useEffect} from "react";

export const AppContext = createContext();

export function AppProvider (props) {
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        console.log("Added to cart")
        console.log(cart);
    },[cart])

    const handleProductAdd = (newProduct) =>{
        const findInCart = cart.find(product => product.id === newProduct.id);
        if (findInCart) {
            const updateToCart = cart.map(product => {
                if (product.id === newProduct.id){
                    return {
                        ...newProduct,
                        quantity: product.quantity + 1
                    }
                }
                return product

            })
            setCart(updateToCart);
        } else {
            const updateToCart = [
                ...cart,
                {
                    ...newProduct,
                    quantity : 1
                }
            ];
            setCart(updateToCart);
        }


    }
    const handleProductDelete = (id) =>{
        const findArr = cart.find(item => item.id === id);
        if(findArr){
        if(findArr.quantity > 1){
                const upDateCart = cart.map(item => {
                    if (item.id === findArr.id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    } return item
                })
                setCart(upDateCart)
            } else if (findArr.quantity === 1) {
            const upDateCart = cart.filter(item => item.id !== id)
            setCart(upDateCart);
        }
    } else {
        return ;
    }
    };
    const cartNum = cart.reduce((total, item)=> total + item.quantity, 0);

    const totalPrice = cart.reduce((total, item)=> total + (item.price)*item.quantity, 0)

    const value = {
        cart,
        cartNum,
        totalPrice,
        handleProductAdd,
        handleProductDelete
    };
    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}