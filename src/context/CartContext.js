import { createContext, useState } from "react"

const cartContext = createContext({
    cart:[]
})

function CartProvider({children}){
    const [cart, setCart] = useState([])

    function isInCart(id){
        return cart.some((item) => item.id === id)
    }

    function addToCart(product, count){
        const newCart = [...cart]
        if(isInCart(product.id)){
            const index = cart.findIndex((item) => item.id === product.id)
            newCart[index].count += count
            setCart(newCart)
        }else{
            const newItem = {...product, count}
            newCart.push(newItem)
            setCart(newCart)
        }
    }

    function getItemInCart(id){
        return cart.find((item) => item.id === id);
    }

    function getTotalItemsInCart(){
        let total = 0
        cart.forEach((item) => {
            total += item.count
        })
        return total
    }

    function getTotalPriceInCart() {
        let total = 0
        cart.forEach((item) => {
            total += item.count * item.precio
        })
        return total
    }

    function removeItem(id) {
        setCart(cart.filter((item) => item.id !== id))
    }

    function clearCart() {
        setCart([])
    }


    return (
        <cartContext.Provider
            value={{
                cart,
                addToCart,
                getItemInCart,
                getTotalItemsInCart,
                getTotalPriceInCart,
                removeItem,
                clearCart
                }}
        >
            {children}
        </cartContext.Provider>
    )
}

export { cartContext, CartProvider }