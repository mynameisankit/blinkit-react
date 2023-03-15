import { createContext } from 'react';

const CartContext = createContext({});
const CartProvider = CartContext.Provider;
const CartConsumer = CartContext.Consumer;

CartContext.displayName = 'CartContext';

export {
    CartProvider,
    CartConsumer,
    CartContext
};