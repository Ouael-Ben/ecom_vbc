import { combineReducers } from "redux";
import Login from "../features/Login/ressources/reducer";
import Register from "../features/Register/ressources/reducer";
import Product from "../features/Product/ressources/reducer";
import Order from "../features/Order/ressources/reducer";
export default combineReducers({ Login, Register, Product, Order });
