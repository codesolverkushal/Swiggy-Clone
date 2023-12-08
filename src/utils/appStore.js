const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";
import priceReducer from "./priceSlice";
const appStore = configureStore(

    {
        reducer:{
           cart:cartReducer,
           p:priceReducer,
        }
    }

);

export default appStore;