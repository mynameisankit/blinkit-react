import { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import PageHeader from './components/PageHeader';
import Page from './pages';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';
// CSS
import './utility.css';
import './globals.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    addItem = (item) => {
        const cart = { ...this.state };
        const { productId, ...data } = item;

        if (cart[productId])
            cart[productId].count++;
        else
            cart[productId] = {
                count: 1,
                ...data
            };

        this.setState(cart);
    }

    removeItem = (productId) => {
        const cart = { ...this.state };

        if (cart[productId])
            cart[productId].count--;
        
        if(!cart[productId].count)
            delete cart[productId];

        this.setState(cart);
    }

    render() {
        return (
            <CartProvider value={{
                data: this.state,
                handlers: {
                    addItem: this.addItem,
                    removeItem: this.removeItem
                }
            }}>
                <Navbar />

                <Fragment>
                    <PageHeader />
                    <Page />
                </Fragment>

                <Footer />
            </CartProvider>
        );
    }
}

export default App;