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
        console.log("Del");
        
    };

    const value = {
        handleProductAdd,
        handleProductDelete
    };
    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}