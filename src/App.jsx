import { Fragment } from "react";
import Navbar from "./components/Navbar";
import PageHeader from "./components/PageHeader";
import Page from "./pages";
import Footer from "./components/Footer";
import { 
    legacy_createStore as createStore, 
    applyMiddleware 
} from "redux";
import { Provider as StoreProvider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
// CSS
import "./utility.css";
import "./globals.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
    return (
        <StoreProvider store={store}>
            <Navbar />

            <Fragment>
                <PageHeader />
                <Page />
            </Fragment>

            <Footer />
        </StoreProvider>
    );
}

export default App;
